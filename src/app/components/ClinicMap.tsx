import { useState, useMemo, useEffect, useRef } from 'react';
import { MapPin, X, Search, Filter, Map as MapIcon, Satellite } from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export interface ClinicLocation {
  id: string;
  name: string;
  city: string;
  province: string;
  lat: number;
  lng: number;
  services: string[];
  address?: string;
  phone?: string;
}

interface ClinicMapProps {
  clinics: ClinicLocation[];
  markerColor?: string;
  language?: 'en' | 'fr';
  availableServices: string[];
}

export default function ClinicMap({ clinics, markerColor = '#6ABF4B', language = 'en', availableServices }: ClinicMapProps) {
  const [selectedClinic, setSelectedClinic] = useState<ClinicLocation | null>(null);
  const [selectedProvince, setSelectedProvince] = useState<string>('All');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [mapLayer, setMapLayer] = useState<'street' | 'satellite'>('street');
  
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const markersRef = useRef<L.Marker[]>([]);

  const t = (en: string, fr: string) => language === 'fr' ? fr : en;

  // Get unique provinces
  const provinces = useMemo(() => {
    const uniqueProvinces = Array.from(new Set(clinics.map(c => c.province))).sort();
    return ['All', ...uniqueProvinces];
  }, [clinics]);

  // Filter clinics based on all criteria
  const filteredClinics = useMemo(() => {
    return clinics.filter(clinic => {
      // Province filter
      if (selectedProvince !== 'All' && clinic.province !== selectedProvince) {
        return false;
      }

      // Service filter - clinic must have ALL selected services
      if (selectedServices.length > 0) {
        const hasAllServices = selectedServices.every(service => 
          clinic.services.includes(service)
        );
        if (!hasAllServices) return false;
      }

      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesSearch = 
          clinic.name.toLowerCase().includes(query) ||
          clinic.city.toLowerCase().includes(query) ||
          clinic.province.toLowerCase().includes(query) ||
          clinic.address?.toLowerCase().includes(query);
        if (!matchesSearch) return false;
      }

      return true;
    });
  }, [clinics, selectedProvince, selectedServices, searchQuery]);

  const toggleService = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  // Group clinics by province for stats
  const clinicStats = useMemo(() => {
    const stats: Record<string, number> = {};
    filteredClinics.forEach(clinic => {
      stats[clinic.province] = (stats[clinic.province] || 0) + 1;
    });
    return stats;
  }, [filteredClinics]);

  // Create custom marker icon
  const createMarkerIcon = (isSelected: boolean = false) => {
    const size = isSelected ? 38 : 32;
    const svgIcon = `
      <svg width="${size}" height="${size + 10}" viewBox="0 0 32 42" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.3"/>
          </filter>
        </defs>
        <path d="M16 0C7.163 0 0 7.163 0 16c0 13 16 26 16 26s16-13 16-26c0-8.837-7.163-16-16-16z" 
              fill="${markerColor}" filter="url(#shadow)"/>
        <circle cx="16" cy="16" r="6" fill="white"/>
      </svg>
    `;
    
    return L.divIcon({
      html: svgIcon,
      iconSize: [size, size + 10],
      iconAnchor: [size / 2, size + 10],
      popupAnchor: [0, -(size + 10)],
      className: 'custom-marker-icon'
    });
  };

  // Initialize map
  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    // Create map
    const map = L.map(mapContainerRef.current, {
      center: [56.1304, -106.3468], // Center of Canada
      zoom: 4,
      scrollWheelZoom: true,
      zoomControl: true,
    });

    // Add tile layers
    const streetLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    });

    const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
      maxZoom: 19,
    });

    // Add default layer
    streetLayer.addTo(map);

    // Store layers for switching
    (map as any).streetLayer = streetLayer;
    (map as any).satelliteLayer = satelliteLayer;

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  // Switch map layers
  useEffect(() => {
    if (!mapRef.current) return;

    const map = mapRef.current;
    const streetLayer = (map as any).streetLayer;
    const satelliteLayer = (map as any).satelliteLayer;

    if (mapLayer === 'street') {
      map.removeLayer(satelliteLayer);
      map.addLayer(streetLayer);
    } else {
      map.removeLayer(streetLayer);
      map.addLayer(satelliteLayer);
    }
  }, [mapLayer]);

  // Update markers when filtered clinics change
  useEffect(() => {
    if (!mapRef.current) return;

    const map = mapRef.current;

    // Remove existing markers
    markersRef.current.forEach(marker => marker.remove());
    markersRef.current = [];

    if (filteredClinics.length === 0) return;

    // Add new markers
    const bounds = L.latLngBounds([]);
    
    filteredClinics.forEach(clinic => {
      const isSelected = selectedClinic?.id === clinic.id;
      const marker = L.marker([clinic.lat, clinic.lng], {
        icon: createMarkerIcon(isSelected)
      });

      // Create popup content
      const popupContent = `
        <div style="min-width: 250px; font-family: 'DM Sans', sans-serif;">
          <div style="display: flex; align-items: start; gap: 12px; margin-bottom: 12px;">
            <div style="width: 36px; height: 36px; border-radius: 50%; background-color: ${markerColor}20; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${markerColor}" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div>
              <h3 style="font-weight: 700; font-size: 16px; color: #1A3A5C; margin: 0 0 4px 0; line-height: 1.3;">
                ${clinic.name}
              </h3>
              <p style="margin: 0; font-size: 14px; color: #333333;">
                ${clinic.city}, ${clinic.province}
              </p>
            </div>
          </div>
          
          ${clinic.address ? `
            <div style="background-color: #F4F4F2; padding: 10px; border-radius: 8px; margin-bottom: 12px;">
              <p style="font-size: 12px; font-weight: 600; color: #1A3A5C; margin: 0 0 4px 0;">
                ${t('Address:', 'Adresse :')}
              </p>
              <p style="font-size: 12px; color: #777777; margin: 0;">
                ${clinic.address}
              </p>
            </div>
          ` : ''}
          
          <div style="margin-bottom: 12px;">
            <p style="font-size: 12px; font-weight: 600; color: ${markerColor}; margin: 0 0 8px 0;">
              ${t('Available Services:', 'Services disponibles :')}
            </p>
            <div style="display: flex; flex-wrap: wrap; gap: 6px;">
              ${clinic.services.map(service => `
                <span style="font-size: 11px; padding: 4px 10px; border-radius: 12px; background-color: #EAF4FB; color: #1A3A5C; font-weight: 500;">
                  ${service}
                </span>
              `).join('')}
            </div>
          </div>
          
          ${clinic.phone ? `
            <div style="padding-top: 12px; border-top: 1px solid #EEEDE8;">
              <p style="font-size: 12px; margin: 0;">
                <span style="font-weight: 600; color: #1A3A5C;">
                  ${t('Phone:', 'Téléphone :')}
                </span>
                <a href="tel:${clinic.phone}" style="color: ${markerColor}; text-decoration: none; margin-left: 4px;">
                  ${clinic.phone}
                </a>
              </p>
            </div>
          ` : ''}
        </div>
      `;

      marker.bindPopup(popupContent, {
        maxWidth: 300,
        className: 'custom-popup'
      });

      marker.on('click', () => {
        setSelectedClinic(clinic);
      });

      marker.addTo(map);
      markersRef.current.push(marker);
      bounds.extend([clinic.lat, clinic.lng]);
    });

    // Fit map to show all markers
    if (bounds.isValid()) {
      map.fitBounds(bounds, { padding: [50, 50], maxZoom: 12 });
    }
  }, [filteredClinics, selectedClinic, markerColor, language, t]);

  // Update selected marker appearance
  useEffect(() => {
    if (!mapRef.current) return;

    markersRef.current.forEach((marker, index) => {
      const clinic = filteredClinics[index];
      const isSelected = selectedClinic?.id === clinic?.id;
      marker.setIcon(createMarkerIcon(isSelected));
    });
  }, [selectedClinic, filteredClinics, markerColor]);

  return (
    <div className="relative">
      {/* Search and Filter Controls */}
      <div className="bg-white rounded-2xl p-6 mb-6" style={{ border: '2px solid #EEEDE8' }}>
        {/* Search Bar */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" style={{ color: '#1A3A5C' }}>
            {t('Search Clinics', 'Rechercher des cliniques')}
          </label>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2" size={20} style={{ color: '#777777' }} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('Search by city, clinic name, or address...', 'Rechercher par ville, nom de clinique ou adresse...')}
              className="w-full pl-12 pr-4 py-3 rounded-lg text-base"
              style={{ border: '1px solid #EEEDE8', outline: 'none' }}
            />
          </div>
        </div>

        {/* Filter Toggle Button */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold mb-4 transition-all"
          style={{ 
            backgroundColor: showFilters ? markerColor : 'white',
            color: showFilters ? 'white' : '#1A3A5C',
            border: `2px solid ${markerColor}`
          }}
        >
          <Filter size={18} />
          {t('Filter Options', 'Options de filtrage')}
          {(selectedProvince !== 'All' || selectedServices.length > 0) && (
            <span className="px-2 py-0.5 rounded-full text-xs bg-white" style={{ color: markerColor }}>
              {(selectedProvince !== 'All' ? 1 : 0) + selectedServices.length}
            </span>
          )}
        </button>

        {/* Filter Panel */}
        {showFilters && (
          <div className="grid md:grid-cols-2 gap-6 pt-4" style={{ borderTop: '1px solid #EEEDE8' }}>
            {/* Province Selection */}
            <div>
              <label className="block text-sm font-semibold mb-3" style={{ color: '#1A3A5C' }}>
                {t('Select Province/Territory', 'Sélectionner la province/territoire')}
              </label>
              <select
                value={selectedProvince}
                onChange={(e) => setSelectedProvince(e.target.value)}
                className="w-full px-4 py-3 rounded-lg text-base"
                style={{ border: '2px solid #EEEDE8', outline: 'none', color: '#1A3A5C' }}
              >
                {provinces.map(province => (
                  <option key={province} value={province}>
                    {province === 'All' 
                      ? t('All Provinces & Territories', 'Toutes les provinces et territoires')
                      : `${province} ${clinicStats[province] ? `(${clinicStats[province]})` : ''}`
                    }
                  </option>
                ))}
              </select>
            </div>

            {/* Service Selection */}
            <div>
              <label className="block text-sm font-semibold mb-3" style={{ color: '#1A3A5C' }}>
                {t('Filter by Services', 'Filtrer par services')}
              </label>
              <div className="space-y-2">
                {availableServices.map(service => {
                  const clinicsWithService = clinics.filter(c => c.services.includes(service)).length;
                  return (
                    <label
                      key={service}
                      className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                      style={{ border: '1px solid #EEEDE8' }}
                    >
                      <input
                        type="checkbox"
                        checked={selectedServices.includes(service)}
                        onChange={() => toggleService(service)}
                        className="w-5 h-5 rounded cursor-pointer"
                        style={{ accentColor: markerColor }}
                      />
                      <span className="flex-1 text-sm font-medium" style={{ color: '#333333' }}>
                        {service}
                      </span>
                      <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: '#F4F4F2', color: '#777777' }}>
                        {clinicsWithService}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Active Filters Display */}
        {(selectedProvince !== 'All' || selectedServices.length > 0 || searchQuery) && (
          <div className="mt-4 pt-4" style={{ borderTop: '1px solid #EEEDE8' }}>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm font-semibold" style={{ color: '#1A3A5C' }}>
                {t('Active Filters:', 'Filtres actifs :')}
              </span>
              
              {selectedProvince !== 'All' && (
                <button
                  onClick={() => setSelectedProvince('All')}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium"
                  style={{ backgroundColor: '#EAF4FB', color: '#1A3A5C' }}
                >
                  {selectedProvince}
                  <X size={14} />
                </button>
              )}

              {selectedServices.map(service => (
                <button
                  key={service}
                  onClick={() => toggleService(service)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium"
                  style={{ backgroundColor: '#EAF4FB', color: '#1A3A5C' }}
                >
                  {service}
                  <X size={14} />
                </button>
              ))}

              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium"
                  style={{ backgroundColor: '#EAF4FB', color: '#1A3A5C' }}
                >
                  "{searchQuery}"
                  <X size={14} />
                </button>
              )}

              <button
                onClick={() => {
                  setSelectedProvince('All');
                  setSelectedServices([]);
                  setSearchQuery('');
                }}
                className="text-sm font-semibold ml-2"
                style={{ color: '#777777' }}
              >
                {t('Clear All', 'Effacer tout')}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Results Summary */}
      <div className="bg-white rounded-xl p-4 mb-6 flex items-center justify-between" style={{ border: '1px solid #EEEDE8' }}>
        <div>
          <p className="font-bold text-lg" style={{ color: '#1A3A5C' }}>
            {filteredClinics.length} {t('Clinics Found', 'cliniques trouvées')}
          </p>
          <p className="text-sm" style={{ color: '#777777' }}>
            {selectedProvince === 'All' 
              ? t('Across all provinces and territories', 'Dans toutes les provinces et territoires')
              : `${t('In', 'Dans')} ${selectedProvince}`}
          </p>
        </div>
        {filteredClinics.length > 0 && (
          <div className="text-right">
            <p className="text-sm font-semibold" style={{ color: markerColor }}>
              {t('Click markers', 'Cliquez sur les marqueurs')}
            </p>
            <p className="text-xs" style={{ color: '#777777' }}>
              {t('for clinic details', 'pour les détails')}
            </p>
          </div>
        )}
      </div>

      {filteredClinics.length === 0 ? (
        /* No Results */
        <div className="bg-white rounded-2xl p-12 text-center" style={{ border: '2px solid #EEEDE8' }}>
          <MapPin size={48} className="mx-auto mb-4" style={{ color: '#CCCCCC' }} />
          <h3 className="font-bold text-xl mb-2" style={{ color: '#1A3A5C' }}>
            {t('No Clinics Found', 'Aucune clinique trouvée')}
          </h3>
          <p className="mb-6" style={{ color: '#777777' }}>
            {t('Try adjusting your filters or search criteria', 'Essayez d\'ajuster vos filtres ou critères de recherche')}
          </p>
          <button
            onClick={() => {
              setSelectedProvince('All');
              setSelectedServices([]);
              setSearchQuery('');
            }}
            className="px-6 py-3 rounded-lg font-semibold text-white"
            style={{ backgroundColor: markerColor }}
          >
            {t('Clear All Filters', 'Effacer tous les filtres')}
          </button>
        </div>
      ) : (
        <>
          {/* Real Interactive Map */}
          <div className="relative w-full rounded-2xl overflow-hidden mb-8" style={{ border: '2px solid #EEEDE8' }}>
            {/* Map Layer Toggle */}
            <div className="absolute top-4 right-4 z-[1000] flex gap-2">
              <button
                onClick={() => setMapLayer('street')}
                className="px-4 py-2 rounded-lg font-semibold text-sm shadow-lg transition-all flex items-center gap-2"
                style={{
                  backgroundColor: mapLayer === 'street' ? markerColor : 'white',
                  color: mapLayer === 'street' ? 'white' : '#1A3A5C',
                  border: `2px solid ${mapLayer === 'street' ? markerColor : '#EEEDE8'}`
                }}
              >
                <MapIcon size={16} />
                {t('Street', 'Rue')}
              </button>
              <button
                onClick={() => setMapLayer('satellite')}
                className="px-4 py-2 rounded-lg font-semibold text-sm shadow-lg transition-all flex items-center gap-2"
                style={{
                  backgroundColor: mapLayer === 'satellite' ? markerColor : 'white',
                  color: mapLayer === 'satellite' ? 'white' : '#1A3A5C',
                  border: `2px solid ${mapLayer === 'satellite' ? markerColor : '#EEEDE8'}`
                }}
              >
                <Satellite size={16} />
                {t('Satellite', 'Satellite')}
              </button>
            </div>

            {/* Leaflet Map Container */}
            <div 
              ref={mapContainerRef} 
              style={{ height: '600px', width: '100%' }}
            />
          </div>

          {/* Clinic Grid List */}
          <div>
            <h3 className="font-bold text-2xl mb-6" style={{ color: '#1A3A5C' }}>
              {t('Clinic Directory', 'Répertoire des cliniques')}
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredClinics.map((clinic) => (
                <div
                  key={clinic.id}
                  onClick={() => {
                    setSelectedClinic(clinic);
                    // Find and open the marker popup
                    const markerIndex = filteredClinics.findIndex(c => c.id === clinic.id);
                    if (markerIndex >= 0 && markersRef.current[markerIndex]) {
                      markersRef.current[markerIndex].openPopup();
                      mapRef.current?.setView([clinic.lat, clinic.lng], 12);
                    }
                  }}
                  className="bg-white rounded-xl p-6 cursor-pointer transition-all hover:shadow-xl"
                  style={{ 
                    border: selectedClinic?.id === clinic.id ? `2px solid ${markerColor}` : '1px solid #EEEDE8',
                    transform: selectedClinic?.id === clinic.id ? 'scale(1.02)' : 'scale(1)'
                  }}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: markerColor + '20' }}>
                      <MapPin size={18} style={{ color: markerColor }} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-base mb-1" style={{ color: '#1A3A5C' }}>
                        {clinic.name}
                      </h4>
                      <p className="text-sm" style={{ color: '#777777' }}>
                        {clinic.city}, {clinic.province}
                      </p>
                    </div>
                  </div>
                  
                  {clinic.address && (
                    <p className="text-xs mb-3 px-3 py-2 rounded-lg" style={{ backgroundColor: '#F4F4F2', color: '#777777' }}>
                      {clinic.address}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-2 mb-3">
                    {clinic.services.map((service, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2.5 py-1 rounded-full font-medium"
                        style={{ 
                          backgroundColor: selectedServices.includes(service) ? markerColor : '#F4F4F2',
                          color: selectedServices.includes(service) ? 'white' : '#1A3A5C'
                        }}
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  {clinic.phone && (
                    <p className="text-xs pt-3" style={{ borderTop: '1px solid #EEEDE8', color: '#777777' }}>
                      {clinic.phone}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      <style>{`
        .custom-marker-icon {
          background: none !important;
          border: none !important;
        }
        .custom-popup .leaflet-popup-content-wrapper {
          border-radius: 12px;
          padding: 0;
        }
        .custom-popup .leaflet-popup-content {
          margin: 16px;
        }
        .custom-popup .leaflet-popup-tip {
          background-color: white;
        }
        .leaflet-container {
          font-family: 'DM Sans', sans-serif;
        }
      `}</style>
    </div>
  );
}
