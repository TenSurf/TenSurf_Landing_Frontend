import React from 'react';
import EditorialSection from './EditorialSection';
import GsapAnimation from '@/utils/GsapAnimation';

const EditorialFeatures = () => {
  return (
    <div id="features" className="w-full max-w-screen-2xl px-4 md:px-8 py-16 lg:py-24 space-y-16 lg:space-y-24 scroll-mt-24">
      <GsapAnimation
        fromVars={{ y: 60, opacity: 0 }}
        toVars={{ y: 0, opacity: 1, duration: 0.8, scrollTrigger: { start: 'top bottom', trigger: '#feat1' } }}
        selector="#feat1"
      >
        <div id="feat1">
          <EditorialSection
            overline="Natural Language"
            headline="Describe Your Strategy Like You'd Tell a Friend"
            description="No syntax to memorize, no classes to extend. Just type what you want: 'Buy when RSI crosses below 30' becomes production-ready NinjaScript code."
            image="/images/product/describe-strategy.png"
            imageAlt="Typing trading rules in plain English into TenSurf Brain, with indicators recognized as chips"
          />
        </div>
      </GsapAnimation>

      <GsapAnimation
        fromVars={{ y: 60, opacity: 0 }}
        toVars={{ y: 0, opacity: 1, duration: 0.8, scrollTrigger: { start: 'top bottom', trigger: '#feat2' } }}
        selector="#feat2"
      >
        <div id="feat2">
          <EditorialSection
            overline="Auto Compilation"
            headline="No More Syntax Errors"
            description="TenSurf Brain compiles your strategy directly inside NinjaTrader and fixes issues automatically. If it doesn't compile, we fix it — not you."
            reversed
            image="/images/product/compile-pipeline.png"
            imageAlt="TenSurf Brain generation pipeline compiling a strategy inside NinjaTrader with automatic fixes"
          />
        </div>
      </GsapAnimation>

      <GsapAnimation
        fromVars={{ y: 60, opacity: 0 }}
        toVars={{ y: 0, opacity: 1, duration: 0.8, scrollTrigger: { start: 'top bottom', trigger: '#feat3' } }}
        selector="#feat3"
      >
        <div id="feat3">
          <EditorialSection
            overline="Instant Backtesting"
            headline="Generate and Test in Minutes"
            description="Your strategy is backtest-ready the moment it's generated. No exports, no manual setup. Test on your historical data, all on your machine."
            image="/images/product/backtest.png"
            imageAlt="Backtest results for a generated strategy inside TenSurf Brain"
          />
        </div>
      </GsapAnimation>
    </div>
  );
};

export default EditorialFeatures;
