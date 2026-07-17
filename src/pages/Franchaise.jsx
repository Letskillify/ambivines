import React, { useState } from "react";
import { FaStore, FaHandshake, FaChartLine } from "react-icons/fa";
import SubPageHero from "../Components/SubPageHero";

const FranchisePage = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        mobile: "",
        email: "",
        city: "",
        pincode: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const message = `*New Franchise Enquiry*\n\n` +
            `*Name:* ${formData.firstName} ${formData.lastName}\n` +
            `*Mobile:* ${formData.mobile}\n` +
            `*Email:* ${formData.email}\n` +
            `*Proposed City/Location:* ${formData.city || "N/A"}\n` +
            `*Pincode:* ${formData.pincode || "N/A"}\n` +
            `*Message:* ${formData.message || "N/A"}`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/917772010555?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');
    };
    return (
        <div className="bg-[#FCFBFA] min-h-screen font-sans text-stone-900">

            {/* 1. HERO SECTION (Cinema Style) */}
            <SubPageHero
                title="Partner With Us"
                subtitle="Franchise Opportunity"
                bgImageDesktop="https://res.cloudinary.com/duzwys877/image/upload/v1784294022/WhatsApp_Image_2026-07-17_at_18.23.15_iwmnkw.jpg"
                breadcrumbs={[
                    { label: "Home", link: "/" },
                    { label: "Franchise" }
                ]}
            />


            {/* 2. THE VISION (Introduction) */}
            <section className="py-32 px-6 text-center bg-white border-b border-stone-100">
                <div className="max-w-3xl mx-auto">
                    <p className="text-xl md:text-2xl font-serif text-stone-800 capitalize leading-relaxed italic mb-10" style={{ color: "#811331" }}>
                        "Ambi Vineyards offers a structured franchise model designed for long-term growth in the wine retail space."
                    </p>
                    <div className="h-px w-20 bg-stone-200 mx-auto mb-10" />
                    <p className="text-sm text-stone-500 font-light tracking-wide leading-loose">
                        Share your details below to receive more information about the franchise programme. Our team will connect with you to guide you through the opportunity and next steps.
                    </p>
                </div>
            </section>

            {/* 3. WHY PARTNER WITH US (Visual Narrative) */}
            <section className="py-32 px-6 md:px-12 bg-[#FCFBFA]">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                        {/* Image Side */}
                        <div className="lg:col-span-6 relative">
                            <div className="aspect-[4/5] overflow-hidden rounded-[3rem] shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1628189675276-cf03b7b2575f?q=80&w=2070"
                                    alt="Franchise Opportunity"
                                    className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-110"
                                />
                            </div>
                            <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-[2rem] shadow-xl hidden md:block">
                                <span className="text-[10px] uppercase tracking-[0.4em] block mb-2 font-bold" style={{ color: '#811331' }}>Status</span>
                                <span className="text-2xl font-serif italic text-stone-900">Est. Heritage</span>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="lg:col-span-5 lg:col-start-8">
                            <span className="text-[10px] uppercase tracking-[0.5em] mb-4 block" style={{ color: '#811331' }}>Your Path to Success</span>
                            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-12 italic">Why Partner with Ambi?</h2>

                            <div className="space-y-12">
                                <div className="flex items-start space-x-6">
                                    <div className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center shrink-0">
                                        <FaStore className="text-stone-400 text-sm" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs uppercase tracking-widest font-bold mb-2">Established Brand</h4>
                                        <p className="text-sm text-stone-500 font-light leading-relaxed">Leverage the reputation of Ambi Vineyards, a name synonymous with quality and heritage in fine wines.</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-6">
                                    <div className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center shrink-0">
                                        <FaHandshake className="text-stone-400 text-sm" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs uppercase tracking-widest font-bold mb-2">Comprehensive Support</h4>
                                        <p className="text-sm text-stone-500 font-light leading-relaxed">Benefit from extensive training, marketing assistance, and ongoing operational guidance.</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-6">
                                    <div className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center shrink-0">
                                        <FaChartLine className="text-stone-400 text-sm" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs uppercase tracking-widest font-bold mb-2">Growth Potential</h4>
                                        <p className="text-sm text-stone-500 font-light leading-relaxed">Tap into a thriving market with a product that appeals to connoisseurs and enthusiasts alike.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Enquiry FORM (Boutique Application) */}
            <section className="py-32 px-6 md:px-12 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-[#FDFCFB] border border-stone-100 p-12 md:p-24 rounded-[4rem] shadow-sm">
                        <div className="text-center mb-20">
                            <span className="text-[10px] uppercase tracking-[0.6em] block mb-6" style={{ color: '#811331' }}>Partnership Enquiry</span>
                            <h2 className="text-4xl md:text-5xl font-serif italic">Express Your Interest</h2>
                        </div>

                        <form className="space-y-12" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="group space-y-2">
                                    <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-400 group-focus-within:text-stone-900 transition-colors">First Name *</label>
                                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="e.g. Rahul" className="w-full bg-transparent border-b border-stone-200 py-4 focus:outline-none focus:border-stone-900 transition-colors text-sm font-light" required />
                                </div>
                                <div className="group space-y-2">
                                    <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-400 group-focus-within:text-stone-900 transition-colors">Last Name *</label>
                                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="e.g. Singh" className="w-full bg-transparent border-b border-stone-200 py-4 focus:outline-none focus:border-stone-900 transition-colors text-sm font-light" required />
                                </div>
                                <div className="group space-y-2">
                                    <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-400 group-focus-within:text-stone-900 transition-colors">Mobile Number *</label>
                                    <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="+91" className="w-full bg-transparent border-b border-stone-200 py-4 focus:outline-none focus:border-stone-900 transition-colors text-sm font-light" required />
                                </div>
                                <div className="group space-y-2">
                                    <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-400 group-focus-within:text-stone-900 transition-colors">Email Address *</label>
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="email@example.com" className="w-full bg-transparent border-b border-stone-200 py-4 focus:outline-none focus:border-stone-900 transition-colors text-sm font-light" required />
                                </div>
                                <div className="group space-y-2">
                                    <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-400 group-focus-within:text-stone-900 transition-colors">City</label>
                                    <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="Proposed Location" className="w-full bg-transparent border-b border-stone-200 py-4 focus:outline-none focus:border-stone-900 transition-colors text-sm font-light" />
                                </div>
                                <div className="group space-y-2">
                                    <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-400 group-focus-within:text-stone-900 transition-colors">PinCode</label>
                                    <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} placeholder="XXXXXX" className="w-full bg-transparent border-b border-stone-200 py-4 focus:outline-none focus:border-stone-900 transition-colors text-sm font-light" />
                                </div>
                            </div>

                            <div className="group space-y-2">
                                <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-400">Message / Comment</label>
                                <textarea name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Tell us about your background..." className="w-full bg-transparent border-b border-stone-200 py-4 focus:outline-none focus:border-stone-900 transition-colors text-sm font-light resize-none"></textarea>
                            </div>

                            <div className="text-center pt-8">
                                <button
                                    type="submit"
                                    className="group relative inline-flex items-center justify-center px-16 py-4 border border-[#811331] text-[#811331] overflow-hidden rounded-full shadow-lg transition-all duration-300 ease-out hover:text-white hover:-translate-y-1"
                                >
                                    <span className="relative z-10 text-[10px] tracking-[0.4em] uppercase font-bold">
                                        Submit Enquiry
                                    </span>
                                    <div
                                        className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.25,1)]"
                                        style={{ backgroundColor: '#811331' }}
                                    />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FranchisePage;