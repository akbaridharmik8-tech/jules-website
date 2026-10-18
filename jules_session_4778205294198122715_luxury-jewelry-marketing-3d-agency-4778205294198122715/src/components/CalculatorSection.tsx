"use client";

import React, { useState } from "react";
import { Sparkles, Calculator, DollarSign, TrendingUp, BarChart3, ArrowRight, ShieldCheck } from "lucide-react";

export function CalculatorSection({ onBookClick }: { onBookClick?: () => void }) {
  const [monthlySpend, setMonthlySpend] = useState<number>(15000);
  const [avgOrderValue, setAvgOrderValue] = useState<number>(2500);
  const [conversionRate, setConversionRate] = useState<number>(1.8);

  // Calculations for Luxury Jewelry Marketing ROAS & Revenue
  const estimatedClicks = Math.round(monthlySpend / 3.2); // ~ $3.20 CPC in luxury segment
  const estimatedOrders = Math.round(estimatedClicks * (conversionRate / 100));
  const projectedRevenue = Math.round(estimatedOrders * avgOrderValue);
  const projectedROAS = (projectedRevenue / monthlySpend).toFixed(2);
  const estimatedNetProfit = Math.round(projectedRevenue * 0.45 - monthlySpend); // assuming 45% luxury margin

  return (
    <section id="calculator" className="py-24 bg-gradient-to-b from-black via-zinc-950 to-black relative overflow-hidden border-t border-amber-500/10">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-medium tracking-widest uppercase">
            <Calculator className="w-3.5 h-3.5 text-amber-400" />
            <span>Interactive ROI Simulator</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Calculate Your <span className="gold-gradient-text">Revenue & ROAS Potential</span>
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base font-light">
            Adjust the sliders below based on your brand's current budget and average ticket price to simulate forecasted performance with Aura Haute Media.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Inputs Card */}
          <div className="lg:col-span-6 bg-zinc-950/80 border border-amber-500/30 rounded-3xl p-8 md:p-10 space-y-8 backdrop-blur-xl shadow-2xl">
            
            <div className="flex items-center justify-between border-b border-amber-500/20 pb-4">
              <h3 className="text-lg font-serif font-bold text-white">
                Campaign Parameters
              </h3>
              <span className="text-xs font-mono text-amber-400 uppercase">
                Luxury Benchmarks
              </span>
            </div>

            {/* Input 1: Monthly Ad Budget */}
            <div className="space-y-3">
              <div className="flex justify-between text-xs font-mono">
                <label className="text-zinc-300">Monthly Marketing Budget:</label>
                <span className="text-amber-400 font-bold">${monthlySpend.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="5000"
                max="100000"
                step="2500"
                value={monthlySpend}
                onChange={(e) => setMonthlySpend(Number(e.target.value))}
                className="w-full accent-amber-400 bg-zinc-800 rounded-lg cursor-pointer h-2"
              />
              <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
                <span>$5,000</span>
                <span>$50,000</span>
                <span>$100,000+</span>
              </div>
            </div>

            {/* Input 2: Average Order Value (AOV) */}
            <div className="space-y-3">
              <div className="flex justify-between text-xs font-mono">
                <label className="text-zinc-300">Average Order Value (AOV):</label>
                <span className="text-amber-400 font-bold">${avgOrderValue.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="500"
                max="25000"
                step="500"
                value={avgOrderValue}
                onChange={(e) => setAvgOrderValue(Number(e.target.value))}
                className="w-full accent-amber-400 bg-zinc-800 rounded-lg cursor-pointer h-2"
              />
              <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
                <span>$500 (Boutique)</span>
                <span>$10,000 (Fine Jewelry)</span>
                <span>$25,000 (Haute)</span>
              </div>
            </div>

            {/* Input 3: Conversion Rate */}
            <div className="space-y-3">
              <div className="flex justify-between text-xs font-mono">
                <label className="text-zinc-300">Target Conversion Rate:</label>
                <span className="text-amber-400 font-bold">{conversionRate}%</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="5.0"
                step="0.1"
                value={conversionRate}
                onChange={(e) => setConversionRate(Number(e.target.value))}
                className="w-full accent-amber-400 bg-zinc-800 rounded-lg cursor-pointer h-2"
              />
              <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
                <span>0.5%</span>
                <span>2.5% (Industry Avg)</span>
                <span>5.0%</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200 flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                Simulated using custom focus-stacked macro photography & targeted high-net-worth buyer audiences.
              </span>
            </div>

          </div>

          {/* Right Results Output Card */}
          <div className="lg:col-span-6 bg-gradient-to-br from-amber-950/40 via-zinc-900 to-black border border-amber-400/50 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[460px]">
            
            <div className="space-y-8 relative z-10">
              
              <div className="flex justify-between items-center border-b border-amber-500/20 pb-4">
                <span className="text-xs font-mono uppercase text-amber-300 tracking-widest font-semibold">
                  Forecasted Monthly Growth
                </span>
                <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-mono border border-amber-400/40">
                  ESTIMATED RETURN
                </span>
              </div>

              {/* Main Metric Spotlight */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-white gold-gradient-text">
                    ${projectedRevenue.toLocaleString()}
                  </div>
                  <div className="text-xs text-zinc-400 uppercase tracking-wider font-mono mt-1">
                    Projected Gross Revenue
                  </div>
                </div>

                <div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-amber-400">
                    {projectedROAS}x
                  </div>
                  <div className="text-xs text-zinc-400 uppercase tracking-wider font-mono mt-1">
                    Estimated ROAS
                  </div>
                </div>
              </div>

              {/* Secondary Metrics */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-amber-500/20">
                <div className="p-4 rounded-xl bg-black/60 border border-amber-500/20">
                  <div className="text-xl font-bold text-emerald-400 font-mono">
                    +${estimatedNetProfit.toLocaleString()}
                  </div>
                  <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-mono mt-0.5">
                    Est. Net Margin Profit
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-black/60 border border-amber-500/20">
                  <div className="text-xl font-bold text-amber-300 font-mono">
                    {estimatedOrders.toLocaleString()} Orders
                  </div>
                  <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-mono mt-0.5">
                    Est. Monthly Customers
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Call To Action */}
            <div className="pt-8 relative z-10">
              <button
                onClick={onBookClick}
                className="w-full gold-button py-4 rounded-full text-xs font-bold uppercase tracking-widest flex justify-center items-center gap-3 shadow-2xl"
              >
                <span>Unlock This Revenue Plan</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
