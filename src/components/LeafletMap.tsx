//: LatLngTuple = [30.061625, 31.336861],
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { useRouter } from 'next/router';
import en from 'src/locales/en';
import ar from 'src/locales/ar';

export default function LeafletMap(props: any) {

    const
        router = useRouter(),
        { locale } = router,
        t = locale === 'en' ? en : ar;
    const
        { location, zoom } = props;
    return (
        <MapContainer className="h-[600px] w-auto relative resize"
            center={location} zoom={zoom} zoomControl={false} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" />
            <Popup position={location}>

                {locale === 'en' ? <div className='flex flex-col gap-0'>
                    <h4><span className='font-bold'><span className='text-accentEmerald-500'>Digi</span> Fly</span> Company </h4>
                    <p className='!m-0'>welcomes you</p>
                </div> : <div className='flex flex-row gap-2'>
                    <h4 className="flex gap-2">
                        <span className='!m-0'>شركة</span>
                        <span className='font-bold'><span className='text-accentEmerald-500'>ديجى</span> فلاي</span></h4>
                    <p className='!m-0'>ترحب بكم</p>
                </div>}
            </Popup>
        </MapContainer>
    )
}

