import React, { useState, useMemo } from "react";
import SubPageHero from "../Components/SubPageHero";
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaUserTie, 
  FaChevronRight, 
  FaPlus,
  FaArrowLeft 
} from "react-icons/fa";

const outletData = [
  { id: 1, city: "Gwalior", name: "Retail Outlet", address: "Shop No 01, University Triangle, Govindpuri, Gwalior", type: "Dealer", manager: "Amit Nigam", phone: "9826014171" },
  { id: 2, city: "Gwalior", name: "Retail Outlet", address: "Shop No. 68, Bajariya Race Course Road, Railway Station, Gwalior", type: "Dealer", manager: "Amit Nigam", phone: "9826014171" },
  { id: 3, city: "Bhopal", name: "Retail Outlet", address: "Shop No. 03, Rajpur Bazar, Prem Kesar Spring Valley, Near Katara Hills, Bhopal", type: "Dealer", manager: "Amit Nigam", phone: "9826014171" },
  { id: 4, city: "Bhopal", name: "Retail Outlet", address: "Shop No. 01, Vinit Kunj, Opp. CI Heights, Kolar Road, Bhopal", type: "Dealer", manager: "Amit Nigam", phone: "9826014171" },
  { id: 5, city: "Bhopal", name: "Retail Outlet", address: "Shop No. 5, Ground Floor, Sage Golden Spring Mall, Karond Road, Bhopal", type: "Dealer", manager: "Amit Nigam", phone: "9826014171" },
  { id: 6, city: "Bhopal", name: "Retail Outlet", address: "Shop No 4, C-Sector, Opp BHEL Gate, Indrapuri, Bhopal", type: "Dealer", manager: "Rama Sharma", phone: "9406577588" },
  { id: 7, city: "Bhopal", name: "Retail Outlet", address: "Shop No. 2, Ranthambhor Complex, MP Nagar Zone 2, Bhopal", type: "Dealer", manager: "Rama Sharma", phone: "9406577588" },
  { id: 8, city: "Bhopal", name: "Retail Outlet", address: "7 No Stop, BDA Complex, Near Sagar Gaire, Shivaji Nagar, Bhopal", type: "Dealer", manager: "Rama Sharma", phone: "9406577588" },
  { id: 9, city: "Bhopal", name: "Retail Outlet", address: "Shop No. E/8, Silver Bills Building, Gulmohar, Bhopal", type: "Dealer", manager: "Rama Sharma", phone: "9406577588" },
  { id: 10, city: "Bhopal", name: "Retail Outlet", address: "Shop No 5, Varkhedi Kalan, Near Nayara Petrol Pump, Nilbad Road, Bhopal", type: "Dealer", manager: "Sachin Singh Rawat", phone: "8319670949" },
  { id: 11, city: "Bhopal", name: "Retail Outlet", address: "Shop No 04, Nirupam Shopping Mall, Hoshangabad Road, Bhopal", type: "Dealer", manager: "Ashish Sharma", phone: "9826331351" },
  { id: 12, city: "Indore", name: "Company Outlet", address: "Shop UG 01, Royal Glory Building, Sayaji Square, Vijay Nagar, Indore", type: "Company Outlet", manager: "Company", phone: "9753677455" },
  { id: 13, city: "Indore", name: "Retail Outlet", address: "Shop No.192/A, Greater Brijeshwari Colony, Pipliyahana, Indore", type: "Dealer", manager: "Nikhil Yadav", phone: "9993177761" },
  { id: 14, city: "Indore", name: "Retail Outlet", address: "Plot 3-4, Scheme No.97, AB Road, Rajendra Nagar, Indore", type: "Dealer", manager: "Nikhil Yadav", phone: "9993177761" },
  { id: 15, city: "Indore", name: "Retail Outlet", address: "Shop No 3, Shri Harigopal Complex, Bhanwarkua Road, Indore", type: "Dealer", manager: "Nikhil Yadav", phone: "9993177761" },
  { id: 16, city: "Indore", name: "Retail Outlet", address: "Shop No. 3, 58/1, Nemawar Road, Palda, Indore", type: "Dealer", manager: "Nilesh Parmar", phone: "8103284644" },
  { id: 17, city: "Indore", name: "Retail Outlet", address: "Shop No. WA 11, Satyagya Bhawan, Scheme No. 94, Ring Road, Indore", type: "Dealer", manager: "Rakhi Parmar", phone: "9425061024" },
  { id: 18, city: "Indore", name: "Retail Outlet", address: "Shop No LG-6/7, Royal Gold Building, YN Road, Indore", type: "Dealer", manager: "Rakhi Parmar", phone: "9425061024" },
  { id: 19, city: "Indore", name: "Retail Outlet", address: "Shop No 05, Near JCB Showroom, Talawali Chanda, AB Road, Indore", type: "Dealer", manager: "Prem Parmar", phone: "9425061024" },
  { id: 20, city: "Indore", name: "Retail Outlet", address: "Shop UG 05, Amar Darshan Building, Saket Square, Indore", type: "Dealer", manager: "Vikas Patidar", phone: "9827570060" },
  { id: 21, city: "Dhar", name: "Retail Outlet", address: "Shop No. 01, Near Geo Motors, Indore Ahmedabad Road, Dhar", type: "Dealer", manager: "Kamlesh Patidar", phone: "9826363597" },
  { id: 22, city: "Jabalpur", name: "Retail Outlet", address: "Shop No. A/3, Shubhanar Complex, Wright Town, Jabalpur", type: "Dealer", manager: "Mahima Keralkar", phone: "9301829128" },
  { id: 23, city: "Seoni", name: "Retail Outlet", address: "Shop No.1, Gram Turia, Pench Kurai, Seoni", type: "Dealer", manager: "Dinesh Sanodiya", phone: "9111066669" },
  { id: 24, city: "Ratlam", name: "Company Outlet", address: "Shop No 191/1, Datar Kripa, Sailana Road, Ratlam", type: "Company Outlet", manager: "Company", phone: "9753677455" },
  { id: 25, city: "Ratlam", name: "Company Outlet", address: "Shop No 06, RIAN MFC Building, Station Road, Ratlam", type: "Company Outlet", manager: "Company", phone: "9753677455" },
  { id: 26, city: "Ratlam", name: "Winery Outlet", address: "Winery Premises, Gate No 02, Village Titari, Ratlam", type: "Company Outlet", manager: "Company", phone: "9753677455" },
  { id: 27, city: "Jabalpur", name: "Retail Outlet", address: "Shop No 116, MR Road 4, Near BSNL Exchange, Vijay Nagar, Jabalpur", type: "Dealer", manager: "Navle Shakya", phone: "7000942104" },
  { id: 28, city: "Jabalpur", name: "Retail Outlet", address: "Shop No. 21/2, Samdadiya Apartment, South Civil Lines, Jabalpur", type: "Dealer", manager: "Pramod Shakya", phone: "8770751347" },
  { id: 29, city: "Jabalpur", name: "Retail Outlet", address: "Shop No 56, Bihari, Mandla Road, Jabalpur", type: "Dealer", manager: "Vikas Agrawal", phone: "9039091155" },
  { id: 30, city: "Seoni", name: "Retail Outlet", address: "Shop No. 03, Jyarat Naka, Akbar Ward, Jabalpur Road, Seoni", type: "Dealer", manager: "Pramod Shakya", phone: "8770751347" },
  { id: 31, city: "Dewas", name: "Retail Outlet", address: "Shop No. 06, Ground Floor, Jawahar Nagar, AB Road, Dewas", type: "Dealer", manager: "Dinesh Choudhary", phone: "9752291111" },
  { id: 32, city: "Dewas", name: "Retail Outlet", address: "Nagar Nigam Colony, Ujjain Road, Dewas", type: "Dealer", manager: "Raja Choudhary", phone: "9752291111" },
  { id: 33, city: "Singrauli", name: "Retail Outlet", address: "Shop No. 3, Bijouli Main Road, Waidan, Singrauli", type: "Dealer", manager: "Poonamchand Malvi", phone: "8827217610" },
  { id: 34, city: "Singrauli", name: "Retail Outlet", address: "Main Road, Navjeevan Vihar, Waidan, Singrauli", type: "Dealer", manager: "Poonamchand Malvi", phone: "8827217610" },
  { id: 35, city: "Rewa", name: "Retail Outlet", address: "Shop No 2, Near Gadariya Triangle, Rewa", type: "Dealer", manager: "Sachin Singh Rawat", phone: "8319670949" },
  { id: 36, city: "Rewa", name: "Retail Outlet", address: "Shop No 203, Aspire Building, Jhiriya, Rewa", type: "Dealer", manager: "Sachin Singh Rawat", phone: "8319670949" },
  { id: 37, city: "Barwani", name: "Retail Outlet", address: "Shop No 01, Sardar Patel Marg, Bus Stand, Barwani", type: "Dealer", manager: "Nilesh Patidar", phone: "9826055238" },
  { id: 38, city: "Barwani", name: "Retail Outlet", address: "Anjad Road, Rewa Circle, Barwani", type: "Dealer", manager: "Niklesh Choudhary", phone: "7987441469" },
  { id: 39, city: "Alirajpur", name: "Retail Outlet", address: "Ward No. 05, Near Reliance Petrol Pump, Alirajpur", type: "Dealer", manager: "Nilesh Patidar", phone: "9826055238" },
  { id: 40, city: "Jhabua", name: "Retail Outlet", address: "Shop No 01, Ward No 11, Mojipada, Jhabua", type: "Dealer", manager: "Sandeep Mehta", phone: "9589867891" },
  { id: 41, city: "Khargone", name: "Retail Outlet", address: "Shop No. 9, Yash Tower, Devi Ahilya Complex, Khargone", type: "Dealer", manager: "Prakash Patidar", phone: "8964071131" },
  { id: 42, city: "Khandwa", name: "Retail Outlet", address: "Shop No 03, Near Railway Station, Khandwa", type: "Dealer", manager: "Rakesh Pal", phone: "9826535091" },
  { id: 43, city: "Harda", name: "Retail Outlet", address: "Shop No. 01, Patel Agency, Near Rathi Petrol Pump, Harda", type: "Dealer", manager: "Rakesh Pal", phone: "9826535091" },
  { id: 44, city: "Betul", name: "Retail Outlet", address: "Shop No. 03, Opp Axis Bank, College Road, Betul", type: "Dealer", manager: "Vijay Malviya", phone: "9770198456" },
  { id: 45, city: "Chhindwara", name: "Retail Outlet", address: "Shop No 23, Stadium, Opp BSNL Office, Parasia Road, Chhindwara", type: "Dealer", manager: "Ashish Sharma", phone: "9826331351" },
  { id: 46, city: "Narmadapuram", name: "Retail Outlet", address: "Shop No 9, Ward No 29, Surajganj, Itarsi", type: "Dealer", manager: "Purvanshi Thakur", phone: "9691221540" },
  { id: 47, city: "Pandurna", name: "Retail Outlet", address: "Shop No 01, Ward No 14, Jay Stambh Chowk, Pandurna", type: "Dealer", manager: "Akash Malvi", phone: "9770198456" },
  { id: 48, city: "Satna", name: "Retail Outlet", address: "Shop No 01, Near Samdadiya Jewellers, Rewa Road, Satna", type: "Dealer", manager: "Sachin Singh Rawat", phone: "8319670949" },
  { id: 49, city: "Sidhi", name: "Retail Outlet", address: "Shop No 1, Samrat Chowk, Sidhi", type: "Dealer", manager: "Sachin Singh Rawat", phone: "8319670949" },
  { id: 50, city: "Vidisha", name: "Retail Outlet", address: "Shop No 01, Sanjay Shopping Center, Bus Stand, Vidisha", type: "Dealer", manager: "Harish Singh Rajput", phone: "8319910559" },
  { id: 51, city: "Sagar", name: "Retail Outlet", address: "Shop No 1, Atal Park, Medical College Road, Sagar", type: "Dealer", manager: "Sachin Singh Rawat", phone: "8319670949" },
  { id: 52, city: "Chhatarpur", name: "Retail Outlet", address: "Shop No 01, Jawahar Road, Panna Naka, Chhatarpur", type: "Dealer", manager: "Ajay Sisodiya", phone: "8643059945" },
  { id: 53, city: "Damoh", name: "Retail Outlet", address: "Shop No 2, Railway Station Square, Sagar Road, Damoh", type: "Dealer", manager: "Rakesh Pal", phone: "9826535091" },
  { id: 54, city: "Tikamgarh", name: "Retail Outlet", address: "Shop No 1, Near Hotel Balaji, Jhabsi Road, Tikamgarh", type: "Dealer", manager: "Vikas Patidar", phone: "9827570060" },
  { id: 55, city: "Balaghat", name: "Retail Outlet", address: "Shop No 01, Rishi Complex, Gondia Road, Balaghat", type: "Dealer", manager: "Aditya Rahangdale", phone: "9098152277" },
  { id: 56, city: "Shahdol", name: "Retail Outlet", address: "Shop No 01, Convent School Road, Pandav Nagar, Shahdol", type: "Dealer", manager: "Ajatshtru Dwivedi", phone: "7000086456" },
  { id: 57, city: "Narsinghpur", name: "Retail Outlet", address: "Shop No 71, Kamat Ward, Kandeli, Narsinghpur", type: "Dealer", manager: "Yashwant Patel", phone: "6261731221" },
  { id: 58, city: "Katni", name: "Retail Outlet", address: "Shop No 69, Samdadiya Colony, Katni", type: "Dealer", manager: "Shubham Jaiswal", phone: "8319050993" },
  { id: 59, city: "Ujjain", name: "Retail Outlet", address: "Shop No 01, Shri Ram Colony Chouraha, Nagda Junction, Ujjain", type: "Dealer", manager: "Ashok Barod", phone: "9009785050" },
  { id: 60, city: "Shajapur", name: "Retail Outlet", address: "Shop No 01, Near Janpad Panchayat, AB Road, Shajapur", type: "Dealer", manager: "Gourav Patel", phone: "9752259066" },
  { id: 61, city: "Agar Malwa", name: "Retail Outlet", address: "Ward No 02, Ujjain Kota Road, Agar Malwa", type: "Dealer", manager: "Vinay Jat", phone: "8120875158" },
  { id: 62, city: "Morena", name: "Retail Outlet", address: "Shop No 03, Old Chungi Naka, MS Road, Morena", type: "Dealer", manager: "Nidhi Sharma", phone: "9029122935" },
  { id: 63, city: "Ratlam", name: "Retail Outlet", address: "Shop No 01, Bodina Road, Sailana, Ratlam", type: "Dealer", manager: "Vishal Jat", phone: "9131636007" },
  { id: 64, city: "Ratlam", name: "Company Outlet", address: "Shop No 191/1, Datar Kripa, Near Sakshi Petrol Pump, Sailana Road, Ratlam", type: "Company Outlet", manager: "Company", phone: "9753677455" },
  { id: 65, city: "Ratlam", name: "Company Outlet", address: "Shop No 06, RIAN MFC Building, Near Domino’s Pizza, Station Road, Ratlam", type: "Company Outlet", manager: "Company", phone: "9753677455" },
  { id: 66, city: "Ratlam", name: "Company Outlet", address: "Winery Premises, Gate No 02, Village & Post Titari, Dist Ratlam", type: "Company Outlet", manager: "Company", phone: "9753677455" },
  { id: 67, city: "Morena", name: "Retail Outlet", address: "Shop No 03, Old Chungi Naka, MS Road, Morena", type: "Dealer", manager: "Nidhi Sharma", phone: "9029122935" }
];

const OutletPage = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [visibleCount, setVisibleCount] = useState(9);

  // Group outlets by city to create the city cards dynamically
  const cityStats = useMemo(() => {
    const stats = {};
    outletData.forEach(outlet => {
      if (!stats[outlet.city]) {
        stats[outlet.city] = 0;
      }
      stats[outlet.city] += 1;
    });
    return Object.entries(stats)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count); // Sort by most outlets first
  }, []);

  const filteredOutlets = selectedCity
    ? outletData.filter(item => item.city === selectedCity)
    : [];

  const displayedOutlets = filteredOutlets.slice(0, visibleCount);

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setVisibleCount(9);
    // Smooth scroll down to the grid section
    window.scrollTo({ top: 500, behavior: 'smooth' });
  };

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  return (
    <div className="bg-[#FCFBFA] min-h-screen font-sans text-stone-900">
      
      {/* 1. HERO SECTION */}
      <SubPageHero
        bgImageDesktop="https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&w=1600&q=80"
      >
        <span className="text-[10px] uppercase tracking-[0.5em] text-white/70 mb-3 block font-bold">
          {selectedCity ? `Exploring ${selectedCity}` : "Find Our Vintages"}
        </span>
        <h1 className="text-4xl md:text-6xl font-serif italic text-white mb-6 leading-tight transition-all duration-500">
          {selectedCity ? selectedCity : "Store Locator"}
        </h1>
        <nav className="flex items-center justify-center space-x-3 text-[10px] uppercase tracking-widest text-white/75">
          <a href="/" className="hover:text-white transition-colors">Home</a>
          <span className="opacity-40">/</span>
          <button 
            onClick={() => setSelectedCity(null)} 
            className={`hover:text-white transition-colors ${!selectedCity ? "text-white font-bold" : ""}`}
          >
            Regions
          </button>
          {selectedCity && (
            <>
              <span className="opacity-40">/</span>
              <span className="text-white font-bold">{selectedCity}</span>
            </>
          )}
        </nav>
      </SubPageHero>

      {/* 2. DYNAMIC CONTENT SECTION */}
      <section className="py-24 px-6 md:px-12 min-h-[60vh]">
        <div className="max-w-7xl mx-auto">
          
          {/* STATE A: CITY CARDS GRID */}
          {!selectedCity ? (
            <>
              <div className="mb-16 text-center">
                <h2 className="text-3xl font-serif text-stone-900 mb-4">Select a Region</h2>
                <p className="text-stone-500 text-sm italic font-light">Discover our presence across Madhya Pradesh.</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {cityStats.map((city) => (
                  <button
                    key={city.name}
                    onClick={() => handleCitySelect(city.name)}
                    className="group relative flex flex-col items-center justify-center p-10 bg-white border border-stone-200 hover:border-stone-900 transition-all duration-500 hover:shadow-2xl overflow-hidden"
                  >
                    {/* Hover Fill Effect */}
                    <div className="absolute inset-0 bg-stone-50 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                    
                    <div className="relative z-10 text-center">
                      <FaMapMarkerAlt className="text-stone-300 group-hover:text-[#811331] text-2xl mx-auto mb-4 transition-colors duration-500" />
                      <h3 className="text-xl font-serif text-stone-900 mb-2 group-hover:scale-105 transition-transform duration-500">
                        {city.name}
                      </h3>
                      <div className="text-[9px] uppercase tracking-[0.2em] text-stone-400 font-bold group-hover:text-stone-600 transition-colors">
                        {city.count} {city.count === 1 ? 'Location' : 'Locations'}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </>
          ) : (
            
            /* STATE B: SELECTED CITY OUTLETS */
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
              
              {/* Contextual Header & Back Button */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-stone-200 pb-8">
                <div>
                  <button 
                    onClick={() => setSelectedCity(null)}
                    className="group flex items-center text-[10px] uppercase tracking-[0.3em] text-stone-500 hover:text-stone-900 font-bold mb-6 transition-colors"
                  >
                    <FaArrowLeft className="mr-3 group-hover:-translate-x-1 transition-transform" />
                    Back to all regions
                  </button>
                  <h2 className="text-4xl font-serif text-stone-900">
                    Outlets in <span className="italic text-[#811331]">{selectedCity}</span>
                  </h2>
                </div>
                <div className="mt-4 md:mt-0 text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold">
                  Showing {displayedOutlets.length} of {filteredOutlets.length}
                </div>
              </div>

              {/* OUTLET GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                {displayedOutlets.map((shop) => (
                  <div
                    key={shop.id}
                    className="group relative flex flex-col bg-transparent transition-all duration-700 hover:-translate-y-2"
                  >
                    <div className="w-12 h-[1px] bg-stone-300 mb-6 group-hover:w-full group-hover:bg-[#811331] transition-all duration-700" />

                    <div className="flex justify-between items-start mb-6">
                      <div>
                        {/* <span className="text-[9px] uppercase tracking-[0.25em] text-stone-400 font-bold mb-1 block">
                          {shop.city}
                        </span> */}
                        <h3 className="text-3xl font-serif text-stone-900 leading-tight">
                          {shop.city}
                        </h3>
                      </div>
                      <div className={`text-[8px] uppercase tracking-widest px-3 py-1.5 border rounded-full transition-colors
                        ${shop.type.includes('Company')
                          ? 'bg-[#811331] text-white border-[#811331]'
                          : 'border-stone-200 text-stone-500 group-hover:border-stone-400'}`}
                      >
                        {shop.type}
                      </div>
                    </div>

                    <div className="flex-grow">
                      <p className="text-[13px] text-stone-500 font-light leading-relaxed mb-8 max-w-[90%] italic">
                        {shop.address}
                      </p>

                      <div className="space-y-4 mb-8">
                        <div className="flex items-center group/item cursor-default">
                          <div className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center mr-3 group-hover/item:border-stone-900 transition-colors">
                            <FaUserTie className="text-stone-400 group-hover/item:text-stone-900" size={10} />
                          </div>
                          <span className="text-[10px] uppercase tracking-widest text-stone-600">{shop.manager}</span>
                        </div>
                        <div className="flex items-center group/item cursor-default">
                          <div className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center mr-3 group-hover/item:border-stone-900 transition-colors">
                            <FaPhoneAlt className="text-stone-400 group-hover/item:text-stone-900" size={10} />
                          </div>
                          <span className="text-[11px] font-bold tracking-widest text-stone-900">{shop.phone}</span>
                        </div>
                      </div>
                    </div>

                    <button className="flex items-center justify-between w-full pt-6 border-t border-stone-100 group-hover:border-stone-900 transition-colors duration-500">
                      <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-stone-900 group-hover:text-[#811331] transition-colors">
                        Get Directions
                      </span>
                      <div className="bg-stone-50 p-2 rounded-full group-hover:bg-[#811331] group-hover:text-white transition-all duration-300">
                        <FaChevronRight size={10} />
                      </div>
                    </button>
                  </div>
                ))}
              </div>

              {/* SHOW MORE BUTTON */}
              {filteredOutlets.length > visibleCount && (
                <div className="mt-24 text-center">
                  <button
                    onClick={handleShowMore}
                    className="group relative inline-flex flex-col items-center"
                  >
                    <div className="w-14 h-14 rounded-full border border-stone-200 flex items-center justify-center mb-4 group-hover:border-stone-900 group-hover:bg-stone-900 transition-all duration-500">
                      <FaPlus size={12} className="text-stone-400 group-hover:text-white group-hover:rotate-90 transition-all duration-500" />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-stone-400 group-hover:text-stone-900 transition-colors">
                      Load More Outlets
                    </span>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* 4. MAP & FOOTPRINT SECTION */}
      <section className="py-24 bg-[#F5F2F0] border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/3 text-center lg:text-left">
              <span className="text-[10px] uppercase tracking-[0.5em] text-stone-400 mb-4 block font-bold">
                Our Presence
              </span>
              <h2 className="text-4xl md:text-5xl font-serif italic text-stone-900 mb-12">
                Expanding Our <br /> Heritage
              </h2>

              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <div className="text-5xl font-serif text-[#811331]">{cityStats.length}<span className="text-2xl ml-1">+</span></div>
                  <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-500">
                    Cities Across MP
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-5xl font-serif text-[#811331]">{outletData.length}<span className="text-2xl ml-1">+</span></div>
                  <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-500">
                    Retail Outlets
                  </div>
                </div>
              </div>

              <p className="mt-12 text-sm text-stone-500 font-light leading-relaxed max-w-sm">
                From the heart of Gwalior to the streets of Bhopal, we are bringing our
                curated collection closer to you, one city at a time.
              </p>
            </div>

            <div className="w-full lg:w-2/3 relative group">
              <div className="absolute -inset-4 bg-white/30 blur-3xl rounded-full transition-opacity group-hover:opacity-100 opacity-0 duration-1000" />
              <div className="relative overflow-hidden rounded-[2rem] bg-stone-50 border border-stone-200 shadow-inner p-8 md:p-12">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/70/India_Madhya_Pradesh_location_map.svg"
                  alt="Madhya Pradesh Locations"
                  className="w-full h-auto opacity-40 grayscale contrast-125 hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-[#811331] rounded-full animate-pulse shadow-[0_0_15px_rgba(129,19,49,0.5)]" />
                <div className="absolute top-[60%] left-[35%] w-2 h-2 bg-[#811331] rounded-full animate-pulse delay-700" />
                <div className="absolute bottom-[30%] left-[60%] w-2 h-2 bg-[#811331] rounded-full animate-pulse delay-300" />
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white border border-stone-200 p-6 rounded-2xl shadow-xl hidden md:block">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center text-white">
                    <FaMapMarkerAlt size={16} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Statewide</div>
                    <div className="text-sm font-serif italic text-stone-900">Madhya Pradesh Territory</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OutletPage;