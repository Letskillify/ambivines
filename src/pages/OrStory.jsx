import React, { useEffect, useState } from 'react';

const OurStory = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isEnglish, setIsEnglish] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 0);
    return () => clearTimeout(t);
  }, []);

  const englishContent = {
    title: "Ambi Vineyards – The Grape Revolution Of Madhya Pradesh",
    paragraphs: [
      "In 1981, In The Small Village Of Titari In The Ratlam District Of Madhya Pradesh, Mr. Ambaram Patidar Began Cultivating Grapes. Coming From A Humble Farming Family, He Had Limited Resources But Limitless Determination. For Years, He Successfully Cultivated Table Grapes, But As Time Passed, A Major Challenge Emerged. While Production Costs And Inflation Continued To Rise, Grape Prices Remained Stagnant, Making Farming Increasingly Unsustainable.",
      "For Many, This Would Have Been A Reason To Give Up. For Mr. Patidar, It Became The Beginning Of A New Opportunity.",
      "During His Visits To Maharashtra, He Observed A Growing Shift Among Farmers Toward Wine Grape Cultivation. These Varieties Were More Resilient, Less Prone To Disease, Easier To Manage, And Offered Better Economic Returns. Recognizing The Potential, He Joined Hands With Fellow Farmers And Began Exploring This New Path. Training Programs Were Attended At Research Centers In Nashik, Modern Viticulture Practices Were Studied, And A Dedicated Group Of 18 Farmers Was Formed-Many Of Whom Had Been Farming Together For Over Three Decades.",
      "However, The Road Ahead Was Far From Easy.",
      "At The Time, Madhya Pradesh Was Still Governed By Excise Laws Dating Back To 1915, Making It Impossible To Establish A Winery In The State. During This Period, Mr. Ambaram Patidar Famously Told His Nephew, Mr. Motilal Patidar, “You Are The Government Yourself-Go And Get The Law Changed.”",
      "Those Words Would Eventually Spark A Revolution.",
      "Mr. Motilal Patidar Began Engaging With Local Administrators In Ratlam And Policymakers In Bhopal. After Months Of Relentless Effort, Discussions, And Advocacy, The Madhya Pradesh Grape Processing Policy Was Approved In 2006. This Landmark Decision Paved The Way For The Establishment Of The State’s First Winery And Laid The Foundation For Ambi Wines.",
      "The Next Challenge Was Securing Financial Support.",
      "At That Time, Banks Were Hesitant To Finance Such An Unfamiliar Industry. Undeterred, Mr. Motilal Patidar Approached Nabard With His Vision. Impressed By His Commitment And Foresight, The Institution Approved Funding For Madhya Pradesh’s First Winery. It Was More Than A Financial Decision-It Marked A Turning Point In The State’s Agricultural History.",
      "In 2008, The First Batch Of Ambi Wines Was Launched.",
      "The Initial Years Were Exceptionally Difficult. In Its First Year, Wine Sales Totaled Just ₹1.5 Lakh, While The Burden Of Investment And Interest Payments Continued To Grow. Wine Culture Was Virtually Nonexistent In The Region. There Were No Trained Marketing Professionals, Consumer Awareness Was Limited, And Wine Was Sold Only Through Liquor Stores, Where Its Ideal Customers Rarely Visited.",
      "Yet Ambi Refused To Give Up.",
      "To Sustain The Business, The Family Cultivated Tomatoes, Chilies, And Guavas To Offset Losses. Land Had To Be Sold, Sacrifices Were Made, And Challenges Persisted-But Not A Single Loan Payment Was Ever Defaulted On. It Was Not Merely A Business Struggle; It Was A Test Of Perseverance, Commitment, And Belief.",
      "Ambi’s Next Milestone Would Reshape The Industry Once Again.",
      "Mr. Motilal Patidar Advocated For The Right Of Grape Growers And Wine Producers To Sell Their Own Products Directly. In 2011, The Government Approved Exclusive Retail Wine Outlets In Madhya Pradesh. Soon After, The First “Ambi The Wine Shop” Opened In Indore.",
      "The Model Proved Highly Successful.",
      "Today, More Than 72 Exclusive Wine Outlets Operate Across 36 Districts Of Madhya Pradesh, Helping Build And Nurture A Wine Culture Throughout The State.",
      "What Began As A Winery With An Annual Production Capacity Of Just 50,000 Liters Has Grown Into A Facility Capable Of Producing 1 Million Liters Per Year, With A New 1.5 Million-liter Expansion Already Underway. Ambi Vineyards Has Welcomed Over 200,000 Visitors And Introduced Its Wines To Enthusiasts From More Than 35 Countries Around The World.",
      "Today, Ambi Vineyards Is Much More Than A Winery.",
      "It Is A Symbol Of Farmers’ Dreams, Resilience, And Innovation. It Is Proof That When Determination, Vision, And Collective Effort Come Together, A Small Initiative Born In A Rural Village Can Transform An Entire Industry.",
      "What Started In A Modest Vineyard In Titari Has Become The Grape Revolution Of Madhya Pradesh. Having Established A Strong Presence Across The State, Ambi Vineyards Is Now Ready To Expand Its Footprint Across India And Contribute To The Growth Of The Country’s Evolving Wine Industry."
    ]
  };

  const hindiContent = {
    title: "Ambi Vineyards – मध्यप्रदेश की अंगूर क्रांति",
    paragraphs: [
      "मध्यप्रदेश के रतलाम जिले के छोटे से गाँव तितरी में, वर्ष 1981 में श्री अंबाराम पाटीदार ने अंगूर की खेती की शुरुआत की। एक साधारण किसान परिवार से आने वाले अंबाराम जी के पास सीमित संसाधन थे, लेकिन उनके सपने और संकल्प असीमित थे। वर्षों तक उन्होंने Table Grapes की खेती की, लेकिन समय के साथ एक बड़ी चुनौती सामने आई। बढ़ती लागत और महंगाई के बावजूद अंगूरों के दाम स्थिर रहे, जिससे खेती का लाभ लगातार कम होता गया।",
      "कई लोगों के लिए यह हार मान लेने का समय होता, लेकिन अंबाराम जी के लिए यह एक नए अवसर की शुरुआत थी।",
      "महाराष्ट्र की यात्राओं के दौरान उन्होंने देखा कि वहाँ के किसान Wine Grapes की खेती की ओर बढ़ रहे हैं। यह अंगूर की ऐसी किस्म थी जो अधिक टिकाऊ थी, कम बीमारियों से प्रभावित होती थी और किसानों के लिए अधिक लाभदायक साबित हो रही थी। उन्होंने इस संभावना को पहचाना और अपने साथी किसानों के साथ मिलकर इस दिशा में कदम बढ़ाने का निर्णय लिया। नासिक के शोध संस्थानों में प्रशिक्षण लिया गया, नई तकनीकों को समझा गया और 18 किसानों का एक मजबूत समूह तैयार हुआ, जिनमें से कई दशकों से एक-दूसरे के साथ खेती कर रहे थे।",
      "लेकिन यह सफर इतना आसान नहीं था।",
      "उस समय मध्यप्रदेश में 1915 के पुराने आबकारी कानून लागू थे, जिनके कारण राज्य में Winery स्थापित करना संभव नहीं था। इसी दौरान अंबाराम जी ने अपने भतीजे श्री मोतीलाल पाटीदार से कहा - “तुम ख़ुद सरकार हो,जाओ क़ानून बदलवाओ।”",
      "यही विचार आगे चलकर एक क्रांति की नींव बना।",
      "मोतीलाल पाटीदार जी ने रतलाम के स्थानीय प्रशासन से लेकर भोपाल के निर्णयकर्ताओं के साथ लगातार संवाद किया। महीनों की अथक मेहनत और प्रयासों के बाद वर्ष 2006 में मध्यप्रदेश Grape Processing Policy को मंजूरी मिली। इसके साथ ही राज्य की पहली Winery स्थापित करने का मार्ग प्रशस्त हुआ और Ambi Wines की नींव रखी गई।",
      "अगली चुनौती थी वित्तीय संसाधनों की। उस समय बैंक इस नए और अनजाने उद्योग को लेकर आश्वस्त नहीं थे। लेकिन दृढ़ इच्छाशक्ति के साथ मोतीलाल जी ने NABARD का दरवाजा खटखटाया। उनकी दूरदृष्टि और विश्वास से प्रभावित होकर मध्यप्रदेश की पहली Winery के लिए ऋण स्वीकृत हुआ। यह केवल एक व्यवसायिक निर्णय नहीं था, बल्कि प्रदेश के कृषि इतिहास में एक महत्वपूर्ण मोड़ था।",
      "वर्ष 2008 में Ambi Wines की पहली बैच बाजार में आई।",
      "शुरुआती वर्ष बेहद कठिन रहे। पहले साल बिक्री मात्र ₹1.5 लाख तक सीमित रही, जबकि निवेश और ब्याज का दबाव लगातार बढ़ रहा था। उस समय प्रदेश में Wine Culture लगभग न के बराबर था। प्रशिक्षित मार्केटिंग टीम नहीं थी, ग्राहक जागरूकता सीमित थी और Wine केवल शराब की दुकानों पर उपलब्ध थी, जहाँ इसके वास्तविक उपभोक्ता कम ही पहुँचते थे।",
      "इन चुनौतियों के बीच भी Ambi ने हार नहीं मानी।",
      "घाटे की भरपाई के लिए टमाटर, मिर्च और अमरूद जैसी फसलों की खेती की गई। कठिन समय में जमीन तक बेचनी पड़ी, लेकिन एक भी ऋण किस्त कभी बकाया नहीं रहने दी गई। यह केवल व्यवसाय नहीं था, बल्कि विश्वास, प्रतिबद्धता और धैर्य की परीक्षा थी।",
      "इसके बाद Ambi ने एक और ऐतिहासिक कदम उठाया।",
      "मोतीलाल पाटीदार जी ने सरकार से मांग की कि जो किसान अंगूर उगाते हैं और Wine बनाते हैं, उन्हें अपनी Wine बेचने का अधिकार भी मिलना चाहिए। वर्ष 2011 में इस पहल को सफलता मिली और मध्यप्रदेश में Exclusive Retail Wine Outlets की अनुमति दी गई। इसी के साथ इंदौर में “Ambi The Wine Shop” का पहला स्टोर शुरू हुआ।",
      "यह मॉडल इतना सफल साबित हुआ कि आज मध्यप्रदेश के 36 से अधिक जिलों में 72+ Exclusive Wine Outlets संचालित हो रहे हैं, जिन्होंने प्रदेश में Wine Culture को नई पहचान दी है।",
      "जो Winery कभी 50,000 लीटर वार्षिक क्षमता से शुरू हुई थी, आज उसकी उत्पादन क्षमता 10 लाख लीटर प्रतिवर्ष तक पहुँच चुकी है, जबकि 15 लाख लीटर क्षमता वाला नया प्लांट भी तैयार हो रहा है। Ambi Vineyards अब तक 2 लाख से अधिक पर्यटकों का स्वागत कर चुका है और 35 देशों के Wine Lovers इसके उत्पादों का स्वाद ले चुके हैं।",
      "आज Ambi Vineyards केवल एक Winery नहीं है।",
      "यह किसानों के सपनों, साहस और नवाचार की जीवंत मिसाल है। यह उस विश्वास की कहानी है कि जब दृढ़ संकल्प, सही दृष्टि और सामूहिक प्रयास एक साथ आते हैं, तो एक छोटे से गाँव से शुरू हुई पहल पूरे उद्योग की दिशा बदल सकती है।",
      "तितरी के एक छोटे से खेत से शुरू हुई यह यात्रा आज मध्यप्रदेश की अंगूर क्रांति का प्रतीक बन चुकी है। राज्य में अपनी मजबूत पहचान स्थापित करने के बाद, Ambi Vineyards अब भारत के विभिन्न राज्यों में अपने कदम बढ़ाने और भारतीय Wine Industry को नई ऊँचाइयों तक ले जाने के लिए तैयार है."
    ]
  };

  const activeContent = isEnglish ? englishContent : hindiContent;

  return (
    <div className="bg-[#FCFBFA] min-h-screen font-sans text-stone-900 selection:bg-stone-200 selection:text-stone-900">

      {/* 1. CINEMATIC HERO SECTION */}
      <section
        className="relative pt-40 pb-24 px-6 text-center bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504275107627-0c2ba7a43dba?auto=format&fit=crop&q=80&w=2000')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-stone-900/55"></div>

        {/* Content */}
        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif mb-8 italic text-white">
            Our Story
          </h1>

          <nav className="flex items-center justify-center space-x-3 text-[10px] uppercase tracking-widest text-[#f3d2dd]">
            <a href="/" className="hover:text-white transition-colors">
              Home
            </a>
            <span className="opacity-40">/</span>
            <span className="text-white font-bold">Our Story</span>
          </nav>
        </div>
      </section>

      {/* 2. THE NARRATIVE SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">

          {/* Language Switcher Controls */}
          <div className="flex justify-end mb-10">
            <div className="inline-flex rounded border border-stone-200 p-1 bg-stone-50 shadow-sm">
              <button
                onClick={() => setIsEnglish(true)}
                className={`px-4 py-1.5 text-xs font-sans tracking-wider uppercase rounded-sm transition-all ${
                  isEnglish
                    ? 'bg-stone-900 text-white font-medium'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setIsEnglish(false)}
                className={`px-4 py-1.5 text-xs font-sans tracking-wider rounded-sm transition-all ${
                  !isEnglish
                    ? 'bg-stone-900 text-white font-medium'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                हिंदी
              </button>
            </div>
          </div>

          {/* Clean Editorial Story Block */}
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            
            <h2 className="text-2xl md:text-4xl font-serif text-stone-900 mb-12 border-b border-stone-200 pb-6 italic leading-relaxed">
              {activeContent.title}
            </h2>

            <div className="space-y-8 text-stone-700 font-light leading-[1.85] text-base md:text-lg">
              {activeContent.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-stone-800 text-justify md:text-left">
                  {paragraph}
                </p>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 3. OPTIONAL FOOTER DIVIDER */}
      <section className="py-10 px-6">
        <div className="max-w-xl mx-auto border-t border-stone-200" />
      </section>

      {/* Custom Styles for Typography */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;1,400&family=Inter:wght@300;400;600&display=swap');
        
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
      `}</style>
    </div>
  );
};

export default OurStory;