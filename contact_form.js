export const initContactForm = () => {
  const container = document.getElementById('contact-container');

  const renderForm = () => {
    container.innerHTML = `
      <div id="form-inner">
        <h2 class="text-4xl font-['Archivo_Black'] text-white uppercase mb-4 tracking-tighter">Secure Your <span class="text-[#B87333]">Expert</span></h2>
        <p class="text-slate-400 mb-12 uppercase text-[10px] tracking-[0.3em]">Request your diagnostic evaluation</p>
        
        <form id="hvac-contact-form" class="space-y-4">
          <div class="grid md:grid-cols-2 gap-4">
            <input type="text" id="name" placeholder="NAME" required class="w-full bg-slate-900 border border-slate-800 p-5 text-xs tracking-widest text-white focus:border-[#B87333] outline-none transition-all" />
            <input type="tel" id="phone" placeholder="PHONE" required class="w-full bg-slate-900 border border-slate-800 p-5 text-xs tracking-widest text-white focus:border-[#B87333] outline-none transition-all" />
          </div>
          <textarea id="requirements" placeholder="SERVICE REQUIREMENTS" rows="4" class="w-full bg-slate-900 border border-slate-800 p-5 text-xs tracking-widest text-white focus:border-[#B87333] outline-none transition-all"></textarea>
          
          <div class="flex gap-4 p-6 bg-slate-900/50 border-l-2 border-[#B87333] my-8">
            <i data-lucide="shield-check" class="text-[#B87333] shrink-0" size="24"></i>
            <p class="text-[10px] leading-relaxed text-slate-400 uppercase tracking-widest">
              <span class="text-white font-bold">Trust Note:</span> We utilize a secure pre-authorization hold for the initial evaluation fee only. No funds are processed until your diagnostic is complete.
            </p>
          </div>
          
          <button type="submit" class="w-full py-6 bg-[#B87333] text-white font-bold uppercase tracking-[0.4em] text-xs hover:tracking-[0.5em] transition-all">Submit Request</button>
        </form>
      </div>
    `;
    

    lucide.createIcons();

    const form = document.getElementById('hvac-contact-form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      renderSuccess();
    });
  };

  const renderSuccess = () => {
    gsap.to("#form-inner", { opacity: 0, scale: 0.95, duration: 0.4, onComplete: () => {
      container.innerHTML = `
        <div class="text-center py-20 border border-[#B87333]/30 bg-slate-900/20" id="success-msg" style="opacity: 0">
          <i data-lucide="check" class="mx-auto text-[#B87333] mb-6" size="64"></i>
          <h3 class="text-2xl font-['Archivo_Black'] text-white uppercase mb-6">Thank you for trusting us.</h3>
          <p class="text-slate-400 max-w-md mx-auto text-sm leading-relaxed mb-8">One of our experts will reach out shortly to ensure your home's efficiency is our priority.</p>
          <div class="pt-8 border-t border-slate-800">
            <p class="text-[10px] tracking-widest text-slate-500 mb-2">URGENT ASSISTANCE</p>
            <a href="tel:7042189286" class="text-2xl font-['Archivo_Black'] text-[#B87333] hover:opacity-80 transition-opacity">(704) 218-9286</a>
          </div>
        </div>
      `;
      lucide.createIcons();
      gsap.to("#success-msg", { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" });
    }});
  };

  renderForm();
};
