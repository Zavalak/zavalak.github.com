export const initMembershipTable = () => {
  const container = document.getElementById('membership-table-container');
  
  const tiers = [
    { name: "One-Time", price: "$0.00", highlight: false, data: ["$0.00", "$0.00", "---", "$249.99", "$249.99", "---", "---", "---", "---"] },
    { name: "Non-Member", price: "$0.00", highlight: false, data: ["$79.99", "$69.99", "$199.99", "$249.99", "$249.99", "$79.99", "$99.99", "10%", "3–5 Days"] },
    { name: "Basic", price: "$249.99", highlight: false, data: ["Waived", "$49.99", "$199.99", "INCLUDED", "INCLUDED", "$39.99", "$99.99", "10%", "2–3 Days"] },
    { name: "Premium", price: "$499.99", highlight: true, data: ["Waived", "Waived", "$169.99", "INCLUDED", "INCLUDED", "UNLIMITED", "$99.99", "WAIVED", "Under 24h"] }
  ];

  const rows = [
    "Today's Diagnostic", "Additional Diagnostic", "Potential Repair ($200)", 
    "Spring Check ($250 Value)", "Fall Check ($250 Value)", "Future Service Calls", 
    "Part Cost", "Part Stocking Fee", "Priority Scheduling"
  ];

  const tableHtml = `
    <div class="overflow-x-auto pb-12">
      <table class="w-full border-collapse min-w-[800px]">
        <thead>
          <tr class="border-b border-slate-800">
            <th class="p-6 text-left text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">Service Component</th>
            ${tiers.map(t => `
              <th class="p-8 text-center ${t.highlight ? 'bg-[#B87333]/10 border-x border-t border-[#B87333]' : ''}">
                <span class="block text-[10px] uppercase tracking-widest text-slate-400 mb-2">${t.name}</span>
                <span class="text-3xl font-['Archivo_Black'] text-white">${t.price}</span>
              </th>
            `).join('')}
          </tr>
        </thead>
        <tbody>
          ${rows.map((row, i) => `
            <tr class="border-b border-slate-800/40 hover:bg-white/5 transition-colors">
              <td class="p-6 text-sm text-slate-300 font-medium">${row}</td>
              ${tiers.map(t => `
                <td class="p-6 text-center text-sm ${t.highlight ? 'bg-[#B87333]/5 border-x border-[#B87333] text-[#B87333] font-bold' : 'text-slate-400'}">
                  ${t.data[i]}
                </td>
              `).join('')}
            </tr>
          `).join('')}
          <tr class="bg-slate-900/50">
            <td class="p-8 font-['Archivo_Black'] uppercase text-[#B87333] text-sm">Total Est. Savings</td>
            <td class="p-8 text-center text-slate-500">$0.00</td>
            <td class="p-8 text-center text-slate-500">$0.00</td>
            <td class="p-8 text-center text-white font-bold">$370.00</td>
            <td class="p-8 text-center border-x border-b border-[#B87333] text-[#B87333] font-black tracking-tighter">$190.00+ & VIP</td>
          </tr>
        </tbody>
      </table>
    </div>
  `;

  container.innerHTML = tableHtml;
};
