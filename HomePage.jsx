import React from "react";

const Card = ({ className = "", children }) => (
  <div className={`relative rounded-2xl border border-blue-500/20 bg-slate-900/40 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.15)] ${className}`}>
    <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{boxShadow:"inset 0 0 30px rgba(59,130,246,0.08)"}} />
    {children}
  </div>
);

export default function HomePage() {
  return (
    <div className="min-h-screen relative text-slate-100">
      {/* 背景：深藍漸層 + 中央光暈 */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b1221] via-[#0f1c3a] to-[#071028]" />
      <div className="absolute inset-0 pointer-events-none" style={{background:"radial-gradient(circle at 50% 40%, rgba(59,130,246,0.25), transparent 60%)"}} />

      {/* A. Header */}
      <header className="border-b border-blue-500/20 bg-[#0b1221]/60 backdrop-blur-xl px-6 py-4 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div>
            <div className="text-lg font-semibold">交通戰情儀表板 2.0</div>
            <div className="text-xs text-slate-400">2026/04/15 Wed 12:30:25</div>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <div className="text-emerald-400">● 系統正常</div>
            <div>更新頻率：10 秒</div>

            <div className="flex gap-2">
              {["平日","假日","連假","活動日","天候模式"].map(m => (
                <button key={m} className="px-2 py-1 bg-slate-800 rounded">{m}</button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-2 text-sm text-slate-300 max-w-7xl mx-auto">
          AI摘要：台北市整體車流穩定，新北板橋與市民大道壅塞上升中
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-6 space-y-6">

        {/* B. KPI */}
        <div className="grid grid-cols-12 gap-4">
          {[
            {label:"交通狀態",value:"正常",color:"emerald"},
            {label:"壅塞路段",value:"18",color:"rose"},
            {label:"事故數",value:"7",color:"amber"},
            {label:"施工影響",value:"5",color:"cyan"},
            {label:"天氣風險",value:"低",color:"blue"},
            {label:"停車滿載",value:"12",color:"violet"},
          ].map((k,i)=>(
            <Card key={i} className="col-span-6 md:col-span-4 xl:col-span-2 p-4">
              <div className="text-xs text-slate-400">{k.label}</div>
              <div className={`text-2xl font-bold text-${k.color}-400`}>{k.value}</div>
            </Card>
          ))}
        </div>

        {/* C. 主戰情區 */}
        <div className="grid grid-cols-12 gap-6">

          {/* 地圖 */}
          <Card className="col-span-12 xl:col-span-8 p-4 h-[400px] overflow-hidden">
            <div className="text-xl md:text-2xl font-semibold mb-3">道路車流狀況</div>
            <div className="h-full rounded-xl overflow-hidden relative">
              {/* Google 地圖（台北市民大道 × 板橋文化路一段交會區） */}
              {/* 靜態地圖（市民大道 × 文化路一段） */}
              <img
                src="/mnt/data/截圖 2026-04-15 下午1.08.55.png"
                alt="板橋 市民大道 × 文化路一段 地圖"
                className="w-full h-full object-cover"
              />

              {/* 視覺覆蓋（保持戰情室風格） */}
              <div className="pointer-events-none absolute inset-0" style={{background:"radial-gradient(circle at center, rgba(30,64,175,0.25), transparent 70%)"}} />
            </div>
          </Card>

          {/* 停車場即時資訊（主戰情區右側） */}
          <Card className="col-span-12 xl:col-span-4 p-4">
            <div className="text-xl md:text-2xl font-semibold mb-3">停車場即時資訊</div>

            <div className="text-xs text-slate-400 mb-2">板橋場域</div>

            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-lg font-semibold">剩餘車位</div>
                <div className="text-3xl font-bold text-emerald-400">128</div>
              </div>
              <div>
                <div className="text-lg font-semibold">總車位</div>
                <div className="text-2xl font-bold text-slate-300">240</div>
              </div>
            </div>

            <div className="mt-2">
              <div className="text-base md:text-lg font-semibold mb-2">使用率</div>
              <div className="h-3 rounded bg-slate-700 overflow-hidden">
                <div className="h-3 bg-emerald-400" style={{width:"53%"}} />
              </div>
              <div className="text-xs text-slate-400 mt-1">目前 53% 使用中</div>
            </div>

            <div className="mt-4 flex justify-between text-slate-300">
              <div>
                <div className="text-base md:text-lg font-semibold mb-2">進場</div>
                <div className="text-xl font-bold text-sky-400">+32</div>
              </div>
              <div>
                <div className="text-base md:text-lg font-semibold mb-2">出場</div>
                <div className="text-xl font-bold text-amber-400">-21</div>
              </div>
            </div>

            <div className="mt-4 p-3 rounded bg-rose-500/10 border border-rose-500/30">
              <div className="text-sm text-rose-400 font-semibold">⚠ 停車場接近滿載</div>
              <div className="text-xs text-slate-400">預估 20 分鐘內達 80%</div>
            </div>

          </Card>
        </div>

        {/* D. 補充區 */}
        <div className="grid grid-cols-12 gap-6">

          <Card className="col-span-12 xl:col-span-4 p-4">
            <div className="text-sm mb-2">24小時車流</div>

            <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
              <div>今日 vs 平均</div>
              <div className="text-emerald-400">+8%</div>
            </div>

            <div className="relative h-40 rounded bg-slate-800/60 p-2 overflow-hidden">
              <svg viewBox="0 0 300 120" className="w-full h-full">
                <defs>
                  <linearGradient id="flowGrad2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.05" />
                  </linearGradient>
                </defs>

                <path d="M0,70 C40,60 80,65 120,60 C160,55 200,60 240,65 C270,70 290,75 300,72"
                  stroke="#64748b" strokeWidth="2" fill="none" strokeDasharray="4 4" />

                <path d="M0,80 C40,50 80,55 120,40 C160,30 200,45 240,50 C270,60 290,65 300,55"
                  stroke="#38bdf8" strokeWidth="2.5" fill="none" strokeDasharray="6 6" className="flow-line" />

                <path d="M0,80 C40,50 80,55 120,40 C160,30 200,45 240,50 C270,60 290,65 300,55 L300,120 L0,120 Z"
                  fill="url(#flowGrad2)" />

                <circle cx="220" cy="48" r="3" fill="#38bdf8" />
              </svg>

              <div className="absolute top-2 right-2 text-[10px] text-slate-300 bg-slate-900/70 px-2 py-1 rounded">
                高峰：17:30
              </div>
            </div>

            <div className="mt-2 flex justify-between text-[10px] text-slate-400">
              {['0','6','12','18','24'].map(t => <span key={t}>{t}</span>)}
            </div>

          </Card>

          <Card className="col-span-12 xl:col-span-4 p-4">
            <div className="text-xl md:text-2xl font-semibold mb-3">天氣環境</div>

            <div className="text-xs text-slate-400 mb-2">4月24日 星期三</div>

            <div className="flex items-center gap-4">
              <div className="relative w-24 h-24 weather-icon">
                <div className="absolute w-12 h-12 bg-yellow-400 rounded-full top-0 left-4 shadow-[0_0_12px_rgba(250,204,21,0.6)]" />
                <div className="absolute bottom-0 left-2">
                  <div className="absolute w-10 h-10 bg-slate-200 rounded-full left-0 bottom-0" />
                  <div className="absolute w-12 h-12 bg-slate-200 rounded-full left-6 bottom-2" />
                  <div className="absolute w-10 h-10 bg-slate-300 rounded-full left-14 bottom-0" />
                  <div className="absolute w-20 h-10 bg-slate-200 rounded-full left-2 bottom-0" />
                </div>
              </div>

              <div>
                <div className="text-lg font-semibold">晴時多雲</div>
                <div className="text-3xl font-bold">25°C</div>
                <div className="text-xs text-slate-400">H 29°C / L 20°C</div>
              </div>
            </div>

            <div className="mt-4">
              <div className="text-base md:text-lg font-semibold mb-2">空氣品質</div>
              <div className="flex items-center gap-3">
                <div className="flex-1 h-2 rounded bg-gradient-to-r from-green-400 via-yellow-400 to-orange-400" />
                <div className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full">52</div>
              </div>
              <div className="text-xs text-slate-300 mt-1">普通</div>
            </div>

            <div className="mt-4 flex justify-between text-slate-300">
              <div>
                <div className="text-base md:text-lg font-semibold mb-2">溫度</div>
                <div className="flex items-center gap-3">
                  <div className="relative w-6 h-10 temp-icon">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full shadow-[0_0_10px_rgba(248,113,113,0.7)]" />
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-2 h-6 bg-red-400 rounded-full" />
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-2 h-6 bg-white/20 rounded-full" />
                  </div>
                  <span className="text-sm">25°C</span>
                </div>
              </div>

              <div>
                <div className="text-base md:text-lg font-semibold mb-2">濕度</div>
                <div className="flex items-center gap-3">
                  <div className="relative w-6 h-8 humidity-icon">
                    <div className="absolute inset-0 bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.7)]" style={{clipPath:'polygon(50% 0%, 100% 60%, 50% 100%, 0% 60%)', borderRadius:'50% 50% 60% 60%'}} />
                    <div className="absolute inset-0 bg-white/20" style={{clipPath:'polygon(50% 0%, 100% 60%, 50% 100%, 0% 60%)', borderRadius:'50% 50% 60% 60%'}} />
                  </div>
                  <span className="text-sm">64%</span>
                </div>
              </div>

            </div>
          </Card>

          <Card className="col-span-12 xl:col-span-4 p-4">
            <div className="text-sm mb-3">關鍵路段</div>

            {[
              {name:"文化路一段",speed:"18 km/h",level:"壅塞",diff:"+35%"},
              {name:"國道一號（台北段）",speed:"65 km/h",level:"順暢",diff:"-5%"},
              {name:"民生路三段（板橋）",speed:"22 km/h",level:"偏慢",diff:"+18%"},
            ].map((r,i)=> {
              const isAlert = parseInt(r.diff) > 30;

              return (
              <div key={i} className={`mb-4 ${isAlert ? 'alert-row' : ''}`}>

                {/* 上層資訊 */}
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-300">{r.name}</span>
                  <span className="text-slate-400">{r.speed}</span>
                </div>

                {/* 壅塞條（流動動畫） */}
                <div className="h-2 rounded bg-slate-700 relative overflow-hidden">

                  <div className={`h-2 rounded ${
                    r.level === '壅塞' ? 'bg-rose-500 flow-bar' :
                    r.level === '偏慢' ? 'bg-amber-400' :
                    'bg-emerald-400'
                  }`} style={{width:
                    r.level === '壅塞' ? '85%' :
                    r.level === '偏慢' ? '60%' :
                    '30%'
                  }} />

                  {/* 流動光 */}
                  {r.level === '壅塞' && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent flow-light" />
                  )}

                </div>

                {/* 下層狀態 */}
                <div className="flex justify-between text-[10px] mt-1">
                  <span className={`${
                    r.level === '壅塞' ? 'text-rose-400' :
                    r.level === '偏慢' ? 'text-amber-400' :
                    'text-emerald-400'
                  }`}>
                    {r.level}
                  </span>
                  <span className="text-slate-400">{r.diff}</span>
                </div>

              </div>
              );
            })}

          </Card>

        </div>

              {/* 動態動畫定義 */}
        <style>{`
          @keyframes dashMove {
            0% { stroke-dashoffset: 0; }
            100% { stroke-dashoffset: -60; }
          }
          .flow-line {
            animation: dashMove 2.5s linear infinite;
          }

          @keyframes flowBar {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }

          .flow-light {
            animation: flowBar 2s linear infinite;
          }

          @keyframes alertFlash {
            0%,100% { opacity: 1; }
            50% { opacity: 0.4; }
          }

          .alert-row {
            animation: alertFlash 1.5s ease-in-out infinite;
          }

          @keyframes tempRise {
            0%, 100% { transform: translateY(0); opacity: 0.92; }
            50% { transform: translateY(-2px); opacity: 1; }
          }

          .temp-icon {
            animation: tempRise 1.8s ease-in-out infinite;
          }

          @keyframes humidityBreathe {
            0%, 100% { transform: scale(1); opacity: 0.9; }
            50% { transform: scale(1.06); opacity: 1; }
          }

          @keyframes sunGlow {
            0%,100% { transform: scale(1); opacity: 0.9; }
            50% { transform: scale(1.08); opacity: 1; }
          }

          @keyframes cloudFloat {
            0% { transform: translateX(0) translateY(0); }
            50% { transform: translateX(6px) translateY(-1px); }
            100% { transform: translateX(0) translateY(0); }
          }
            50% { transform: translateX(2px); }
          }

          .weather-icon > div:first-child {
            animation: sunGlow 2.5s ease-in-out infinite;
          }

          .weather-icon > div:nth-child(2) {
            animation: cloudFloat 2.4s ease-in-out infinite;
          }

          .weather-icon > div:nth-child(3) {
            animation: cloudFloat 3.2s ease-in-out infinite reverse;
          }
            50% { transform: scale(1.06); opacity: 1; }
          }

          .humidity-icon {
            animation: humidityBreathe 2.4s ease-in-out infinite;
            transform-origin: center bottom;
          }
        `}</style>

      </main>
    </div>
  );
}
