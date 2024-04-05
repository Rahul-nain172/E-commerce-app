import mac from "./pimages/macbookm3.jpeg"
import asus from "./pimages/assusrogstrixscar.jpeg"
import msi from "./pimages/msipulse17.webp"
import legion from "./pimages/81JDjkxRGuL._AC_UF1000,1000_QL80_.jpg"
import galaxybook from "./pimages/galaxybook4.avif"
import nothing2a from "./pimages/nothing2a.webp"
import samsungs24 from "./pimages/samsungs24ultra.webp"
import motoedge30 from "./pimages/motoedge30fusion.webp"
import iqooz9 from "./pimages/iqooz9.webp"
import iphone15 from "./pimages/iphone15.jpeg"
import samsungtv from "./pimages/samsungtv.webp"
import lgtv from "./pimages/lgtv.webp"
import mitv from "./pimages/mitv.jpeg"
import toshibatv from "./pimages/toshibhatv.webp"
import airpods from "./pimages/airpodspro.jpeg"
import jbl from "./pimages/jbl.webp"
const Pinfo=[
    {
        Name:'MACBOOK AIR M3',
        Image:mac,
        Category:'Laptops',
        Details:'Apple MacBook Air Apple M3 - (8 GB/256 GB SSD/macOS Sonoma) MRXT3HN/A',
        Price:1300,
        Specs:
            {
                DISPLAY:' Liquid Retina display, LED-backlit Display with IPS Technology, Native Resolution at 224 pixels per inch, 500 nits Brightness',
                RAM:'8 GB',
                SSD :'256 GB',
                CORES:'8',
                SIZE:'13 Inch'
                
            }
    },
    {
        Name:'ASUS ROG STRIX G16',
        Image:asus,
        Category:'Laptops',
        Details:'ASUS ROG Strix G16 (2023) with 90WHr Battery Intel HX-Series Intel Core i9 13th Gen 13980HX - (16 GB/1 TB SSD/Windows 11 Home/8 GB Graphics/NVIDIA GeForce RTX 4070/240 HZ/140 TGP) G614JI-N4151WS Gaming Laptop  (16 Inch, Volt Green, 2.50 Kg, With MS Office)',
        Price:1500,
        Specs:{
                DISPLAY:' QHD+, WQXGA, 240Hz, 3ms, 170, IPS-level, 500nits, 1200:1, 100%, Anti-glare display',
                RAM:'16 GB',
                SSD :'1 TB',
                CORES:'16',
                SIZE:'16 Inch'
                
            }
    },
    {
        Name:'MSI PULSE 17',
        Image:msi,
        Category:'Laptops',
        Details:'MSI Pulse 17 Intel Core i9 13th Gen 13900H - (16 GB/1 TB SSD/Windows 11 Home/8 GB Graphics/NVIDIA GeForce RTX 4070/240 Hz) Pulse 17 B13VGK-652IN Gaming Laptop  (17.3 Inch, Black, 2.7 Kg)',
        Price:1400,
        Specs:{
                DISPLAY:'Full HD , 144Hz 45% NTSC',
                RAM:'16 GB',
                SSD :'1 TB',
                CORES:'10',
                SIZE:'17.3 Inch'
                
            }
    },
    {
        Name:'LENOVO LEGION',
        Image:legion,
        Category:'Laptops',
        Details:'Lenovo Legion Intel Core i9 13th Gen 13980HX - (32 GB/2 TB SSD/Windows 11 Home/16 GB Graphics/NVIDIA GeForce RTX 4090/175 W) 16IRX8 Gaming Laptop  (16 inch, Carbon Black, 2.56 kg, With MS Office)',
        Price:2900,
        Specs:
            {
                DISPLAY:'3.2K Mini LED, 1200nits, Anti-glare, 100% DCI-P3, 100% Adobe RGB, 100% sRGB, 165Hz, DisplayHDR 1000, Dolby Vision, G-SYNC, Low Blue Light, High Gaming Performance',
                RAM:'16 GB',
                SSD :'2 TB',
                CORES:'20',
                SIZE:'17.3 Inch'
                
            }
    },
    {
        Name:'SAMSUNG GALAXY BOOK 4',
        Image:galaxybook,
        Category:'Laptops',
        Details:'SAMSUNG Galaxy Book4 360 Evo Intel Core 7 150U - (16 GB/512 GB SSD/Windows 11 Home) NP750QGK-KG2 2 in 1 Laptop  (15.6 inch, Gray, 1.46 kg, With MS Office)',
        Price:1300,
        Specs:
            {
                DISPLAY:'Full HD Super AMOLED Display',
                RAM:'8 GB',
                SSD :'512 MB',
                CORES:'8',
                SIZE:'15.6 Inch'
                
            }
    },
    {
        Name:'NOTHING PHONE(2a)',
        Image:nothing2a,
        Category:'Smartphones',
        Details:'Nothing Phone (2a) 5G (Black, 256 GB)  (8 GB RAM)',
        Price:299,
        Specs:{
            DISPLAY:'Full HD+ Corning Gorilla Glass 5, 10 Bit (1.07 Billion Colours), 5,000,000:1, 1300 Nits Peak Brightness, 1100 Nits Outdoor Brightness, 700 Nits Typical Brightness, 30Hz - 120Hz Adaptive Refresh Rate, 240Hz Touch Sampling Rate, 2160Hz PWM Frequency',
            RAM:'8 GB',
            ROM:'256 GB',
            PROCESSOR:'Mediatek Dimensity 7200 Pro',
            CAMERA:'50MP + 50MP OIS | 32MP Front Camera'
        }
    },
    {
        Name:'SAMSUNG S24 ULTRA',
        Image:samsungs24,
        Category:'Smartphones',
        Details:'SAMSUNG Galaxy S24 Ultra 5G (Titanium Gray, 256 GB)  (12 GB RAM)',
        Price:1599,
        Specs:{
            DISPLAY:'Quad HD+ , Dynamic AMOLED 2X , Max Refresh Rate: 120 Hz, Peak Brightness: 2600 nits ',
            RAM:'12 GB',
            ROM:'256 GB',
            PROCESSOR:'Snapdragon 8 Gen 3',
            CAMERA:'200MP + 50MP + 12MP + 10MP | 12MP Front Camera'
        }
    },
    {
        Name:'IPHONE 15 PRO MAX',
        Image:iphone15,
        Category:'Smartphones',
        Details:'Apple iPhone 15 Pro Max (Natural Titanium, 256 GB)',
        Price:1699,
        Specs:{
            DISPLAY:'Super Retina XDR Display',
            RAM:'12 GB',
            ROM:'256 GB',
            PROCESSOR:'A17 Pro Chip, 6 Core Processor ',
            CAMERA:'48MP + 12MP + 12MP | 12MP Front Camera'
        }
    },
    {
        Name:'IQOO Z9',
        Image:iqooz9,
        Category:'Smartphones',
        Details:'iQOO Z9 5G (Brushed Green, 8GB RAM, 128GB Storage) | Dimensity 7200 5G Processor | Sony IMX882 OIS Camera | 120Hz AMOLED with 1800 nits Local Peak Brightness | 44W Charger in The Box',
        Price:349,
        Specs:{
            DISPLAY:'16.9cm(6.67") 120Hz Full HD+ AMOLED Display with 1800 nits local peak brightness, Certified by SGS Eye Care Display, DT Star2-Plus Glass protection, HDR playback supported',
            RAM:'8 GB',
            ROM:'128 GB',
            PROCESSOR:'Mediatek Dimensity 7200 5G ',
            CAMERA:'64MP + 32MP | 32MP Front Camera'
        }
    },
    {
        Name:'MOTOROLA EDGE 30 FUSION',
        Image:motoedge30,
        Category:'Smartphones',
        Details:'Motorola Edge 30 Fusion 5G (Viva Magenta, 8GB RAM, 128GB Storage) | Full HD+ pOLED Display | 50MP+13MP+2MP | 32MP Front Camera | Qualcomm Snapdragon 888 + Processor | 4400 mAh TurboPower 68 W Charging',
        Price:499,
        Specs:{
            DISPLAY:'16.9cm(6.67") 120Hz Full HD+ AMOLED Display with 1800 nits local peak brightness, Certified by SGS Eye Care Display, DT Star2-Plus Glass protection, HDR playback supported',
            RAM:'8 GB',
            ROM:'128 GB',
            PROCESSOR:'Qualcomm Snapdragon 888 +',
            CAMERA:'50MP+13MP+2MP | 32MP Front Camera'
        }
    },
    {
        Name:'SAMSUNG QLED TV',
        Image:samsungtv,
        Category:'TELEVISIONS',
        Details:'Samsung 214 cm (85 inches) 8K Ultra HD Smart Neo QLED TV QA85QN900CKXXL (Titan Black)',
        Price:9999,
        Specs:{
            DISPLAY:'8K Ultra HD Smart Neo QLED Panel | Neural Quantum Processor 8K | 100% Colour Volume with Quantum Dot | Neo Quantum HDR 8K Pro ',
            CONNECTIVITY:'4 HDMI ports to connect set top box or gaming console | 3 USB ports to connect hard drives or other USB devices | Ethernet | Wi-fi | Bluetooth',
            SOUND:'90W Output- 6.2.4CH | Powerful Speakers with Dolby Atmos | Q-Symphony | Woofer | Active Voice Amplifier',
            SIZE:'85 Inches',
            'REFRESH RATE':'100 Hz',
        }
        

    },
    {
        Name:'LG 4K ULTRA HD TV',
        Image:lgtv,
        Category:'TELEVISIONS',
        Details:'LG 121 cm (48 inches) 4K Ultra HD Smart OLED TV 48A3PSA (Rocky Black)',
        Price:1099,
        Specs:{
            DISPLAY:'4K Ultra HD LED Display | 4K Upscaler | AI Brightness Control',
            CONNECTIVITY:'Wi-Fi (Built-in) | 3 HDMI ports to connect set top box, Blu Ray players, gaming console | 2 USB ports to connect hard drives and other USB devices | eARC | Bluetooth 5.0 | Optical | Ethernet',
            SOUND:'20 Watts Output | 2.0 Ch Speaker | AI Sound (Virtual Surround 5.1 up-mix) | Auto Volume Levelling | Bluetooth Surround Ready',
            SIZE:'48 Inches',
            'REFRESH RATE':'60 Hz',
        }
        

    },
    {
        Name:'XIAOMI X-SERIES SMART GOOGLE TV',
        Image:mitv,
        Category:'TELEVISIONS',
        Details:'Xiaomi 138 cm (55 inches) X 4K Dolby Vision Series Smart Google TV L55M8-A2IN (Black)',
        Price:499,
        Specs:{
            DISPLAY:'4K Dolby Vision | HDR 10 | HLG | Reality Flow MEMC | Vivid Picture Engine | Wide Colour Gamut- DCI-P3 94%',
            CONNECTIVITY:'Dual Band Wi-Fi | 3 HDMI | 2 USB ports| Optical port| AV port| Ethernet port | 3.5 mm jack | Bluetooth 5.0',
            SOUND:'30 Watts Output | Dolby Audio | DTS-X | DTS Virtual: X',
            SIZE:'55 Inches',
            'REFRESH RATE':'60 Hz',
        }

    },
    {
        Name:'TOSHIBA 4K-ULTRA HD TV',
        Image:toshibatv,
        Category:'TELEVISIONS',
        Details:'TOSHIBA 139 cm (55 inches) 4K Ultra HD Smart LED Google TV 55C350MP (Silver)',
        Price:449,
        Specs:{
            DISPLAY:'10 bit A+ Grade Panel | REGZA Engine 4K | Bezel-less Ultra Slim Display Design | Decoding of Dolby Vision, HDR10, HLG | 1 Billion Colours | ALLM for VRR | MEMC',
            CONNECTIVITY:'3 HDMI ports to connect set top box, Blu Ray players, gaming console (HDMI 1 eARC supported) | 2 USB ports to connect hard drives and other USB devices | Dual-band Wi-Fi | Bluetooth 5.0',
            SOUND:'24 Watts Output powered by REGZA Power Audio| Dolby Atmos | Dolby Digital for remarkable sound quality',
            SIZE:'55 Inches',
            'REFRESH RATE':'60 Hz',
        }

    },
    {
        Name:'AIRPODS PRO(2nd gen)',
        Image:airpods,
        Category:'EARBUDS',
        Details:'Apple AirPods Pro (2nd Generation) Wireless Ear Buds with USB-C Charging, Up to 2X More Active Noise Cancelling Bluetooth Headphones, Transparency Mode, Adaptive Audio, Personalized Spatial Audio',
        Price:249,
        Specs:{
            'FORM FACTOR':'IN EAR',
            'NOISE CANCELLATION ': 'YES',
             CONNECTIVITY:'WIRELESS',
             LATENCY:'10ms'
        }
    },
    {
        Name:'JBL Tune 235NC ',
        Image:jbl,
        Category:'EARBUDS',
        Details:'JBL Tune 235NC in Ear Wireless ANC Earbuds (TWS), Massive 40Hrs Playtime with Speed Charge, Customizable Bass with Headphones App, 4 Mics for Perfect Calls, Google Fast Pair, Bluetooth 5.2 (Black)',
        Price:59,
        Specs:{
            'FORM FACTOR':'IN EAR',
            'NOISE CANCELLATION ': 'YES',
             CONNECTIVITY:'WIRELESS',
             LATENCY:'40ms'
        }
    }
]

export default Pinfo;