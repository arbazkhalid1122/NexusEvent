export default function Partners() {
  return (
    <section id="Section-Partner">
      <div className="flex flex-col items-start justify-start gap-y-2.5 bg-[var(--color-bg--neutral)] pt-24 pb-24">
        <div className="flex flex-col justify-between items-stretch w-full max-w-[79.5rem] xl:max-w-[100rem] 2xl:max-w-[160rem] mx-auto px-[3%]">
          <div className="flex flex-col items-start justify-start gap-y-[5.875rem]">
            <div className="flex flex-col items-start justify-start gap-y-8">
              <div className="w-[70%] md:w-[80%] sm:w-full mb-6 overflow-hidden">
                <h2 className="text-[var(--color-text--inverse)] capitalize break-words">Powered by trusted partnerships.</h2>
              </div>
              <div
                data-w-id="e8172c36-b90f-78b9-7d8d-82980a79ea6d"
                style={{ opacity: 0 }}
                className="w-[70%]"
              >
                <div className="text-[1.0625rem] font-normal leading-[160%] text-[var(--color-text--inverse)]">
                  Explore the esteemed companies we collaborate with to deliver outstanding events
                  and xperiences
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-2.5 justify-center items-center w-full h-[9.125rem] p-12 relative">
                  <img
                    src="/assets/logos/partners/66044e18973aca10951e3752_Logo%20Partner.svg"
                    loading="lazy"
                    width="221.2265625"
                    height="56.25837707519531"
                    alt="Logo Architect"
                    className="h-[3.51615rem] object-contain"
                  />
                  <div className="divider-mask-bottom">
                    <div className="line-dynamic color-line-green"></div>
                  </div>
                </div>
                <div className="text-[var(--color-text--inverse)]">Architect</div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-2.5 justify-center items-center w-full h-[9.125rem] p-12 relative">
                  <img
                    src="/assets/logos/partners/66044e184142f40dc26ac56f_Logo%20Partner%202.svg"
                    loading="lazy"
                    width="221.2265625"
                    height="56.25837707519531"
                    alt="Logo Sumer"
                    className="h-[3.51615rem] object-contain"
                  />
                  <div className="divider-mask-bottom">
                    <div className="line-dynamic color-line-green"></div>
                  </div>
                </div>
                <div className="text-[var(--color-text--inverse)]">Saumer</div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-2.5 justify-center items-center w-full h-[9.125rem] p-12 relative">
                  <img
                    src="/assets/logos/partners/66044e196c067552ac5ef2b9_Logo%20Partner%203.svg"
                    loading="lazy"
                    width="221.2265625"
                    height="56.25837707519531"
                    alt="Logo North Company\n"
                    className="h-20 object-contain"
                  />
                  <div className="divider-mask-bottom">
                    <div className="line-dynamic color-line-green"></div>
                  </div>
                </div>
                <div className="text-[var(--color-text--inverse)]">North Company</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


