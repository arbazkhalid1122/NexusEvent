export default function Quote() {
  return (
    <section id="Section-Quot" className="relative overflow-hidden flex pt-24 pb-24">
      <div className="flex flex-col justify-between items-stretch w-full max-w-[79.5rem] xl:max-w-[100rem] 2xl:max-w-[160rem] mx-auto px-[3%]">
        <div className="flex flex-col justify-between items-end gap-12">
          <div className="w-full overflow-hidden">
            <div className="w-[70%] md:w-[80%] sm:w-full mb-6 overflow-hidden">
              <div className="text-[2.5rem] md:text-[3.2rem] lg:text-[4rem] font-light leading-[120%]">
                <span className="text-[var(--color-text--secondary)]">Great minds</span>
                discuss ideas; average minds discuss events; small minds discuss people.
              </div>
            </div>
          </div>
          <div className="w-full"><div className="line-dynamic"></div></div>
          <div
            data-w-id="3a6d412d-b7d5-95f3-74d6-93bb6afcaf61"
            style={{ opacity: 0 }}
            className="text-[1.3rem] leading-[110%]"
          >
            Eleanor Roosevelt
          </div>
        </div>
      </div>
    </section>
  );
}


