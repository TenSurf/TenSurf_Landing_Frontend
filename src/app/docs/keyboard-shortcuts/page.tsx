import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Keyboard Shortcuts | TenSurf Brain Docs",
  description:
    "All keyboard shortcuts available in TenSurf Brain. Navigate faster and work more efficiently.",
};

const shortcuts = [
  {
    category: "Navigation",
    items: [
      { keys: ["\u2318", "K"], description: "Open command palette" },
      { keys: ["\u2318", "B"], description: "Toggle Strategy Builder panel" },
      { keys: ["\u2318", "N"], description: "Start a new chat" },
      { keys: ["?"], description: "Show keyboard shortcuts overlay" },
    ],
  },
  {
    category: "Chat",
    items: [
      { keys: ["Enter"], description: "Send message" },
      { keys: ["Shift", "Enter"], description: "New line in message" },
    ],
  },
  {
    category: "General",
    items: [
      { keys: ["Esc"], description: "Close current modal or panel" },
    ],
  },
];

export default function KeyboardShortcutsPage() {
  return (
    <article>
      <h1 className="text-3xl sm:text-4xl font-medium text-[#E9ECEF] mb-4">
        Keyboard Shortcuts
      </h1>
      <p className="text-lg text-[#ADB5BD] mb-12">
        Navigate TenSurf Brain faster with these shortcuts.
      </p>

      <div className="space-y-10">
        {shortcuts.map((group) => (
          <div key={group.category}>
            <h2 className="text-sm font-semibold text-[#ADB5BD] uppercase tracking-wider mb-4">
              {group.category}
            </h2>
            <div className="border border-[#1a1a2e] rounded-xl overflow-hidden">
              {group.items.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between px-5 py-4 ${
                    i > 0 ? "border-t border-[#1a1a2e]" : ""
                  }`}
                >
                  <span className="text-[#ADB5BD] text-sm">
                    {item.description}
                  </span>
                  <div className="flex items-center gap-1.5">
                    {item.keys.map((key, ki) => (
                      <kbd
                        key={ki}
                        className="min-w-[28px] h-7 flex items-center justify-center bg-[#0a0a1f] border border-[#1a1a2e] rounded-md px-2 text-xs font-mono text-[#E9ECEF]"
                      >
                        {key}
                      </kbd>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-[#00041A] border border-[#1a1a2e] rounded-xl p-6">
        <p className="text-sm text-[#ADB5BD]">
          <strong className="text-[#E9ECEF]">Tip:</strong> Press{" "}
          <kbd className="bg-[#0a0a1f] border border-[#1a1a2e] px-1.5 py-0.5 rounded text-xs text-[#E9ECEF]">
            ?
          </kbd>{" "}
          inside the TenSurf Brain app to see the shortcuts overlay at any time.
        </p>
      </div>
    </article>
  );
}
