/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Hero } from './components/Hero';
import { DashboardKpis } from './components/DashboardKpis';
import { ChannelPerformance } from './components/ChannelPerformance';
import { BehaviorAnalysis } from './components/BehaviorAnalysis';
import { Highlights } from './components/Highlights';
import { Insights } from './components/Insights';
import { FollowerCharts } from './components/FollowerCharts';

export default function App() {
  return (
    <div className="h-screen bg-slate-50 flex flex-col font-sans text-slate-900 overflow-hidden">
      <Hero />
      <main className="flex-1 p-4 grid grid-cols-1 lg:grid-cols-12 grid-rows-[auto] gap-3 overflow-auto">
        <div className="lg:col-span-12">
          <DashboardKpis />
        </div>
        
        <div className="lg:col-span-8 bg-white p-4 rounded shadow-sm flex flex-col gap-3">
          <ChannelPerformance />
          <FollowerCharts />
          <BehaviorAnalysis />
        </div>

        <div className="lg:col-span-4 flex flex-col gap-3">
          <Highlights />
        </div>

        <div className="lg:col-span-12 mt-auto">
          <Insights />
        </div>
      </main>
      
      <footer className="bg-slate-200 p-2 text-[9px] text-slate-500 flex justify-between items-center shrink-0">
        <span>Report Gerado por IA Estratégica & Digital Marketing Ops | Assaí Atacadista</span>
        <span className="font-mono">v2.0-2024-CONFIDENCIAL</span>
      </footer>
    </div>
  );
}
