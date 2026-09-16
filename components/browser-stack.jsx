const samples = [
  { name: "Homa Nepal", type: "Wellness / care", tone: "rose", className: "window-front" },
  { name: "Surgical Mart Nepal", type: "Healthcare", tone: "blue", className: "window-mid" },
  { name: "Coffee Dhara", type: "Hospitality", tone: "coffee", className: "window-back" },
];
export default function BrowserStack() {
 return <div className="browser-stack" aria-label="A visual stack representing selected client websites">{samples.map((sample, index) => <div className={`browser-window ${sample.className}`} style={{ "--stack-delay": `${0.42 + index * 0.12}s` }} key={sample.name}><div className="window-bar"><span /><span /><span /></div><div className={`site-preview ${sample.tone}`}><p>{sample.type}</p><b>{sample.name}</b><div className="preview-shape" /><div className="preview-lines"><i /><i /><i /></div></div></div>)}</div>;
}
