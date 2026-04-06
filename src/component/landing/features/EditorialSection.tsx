import React from 'react';

interface EditorialSectionProps {
  overline: string;
  headline: string;
  description: string;
  reversed?: boolean;
  children?: React.ReactNode;
}

const EditorialSection = ({ overline, headline, description, reversed = false, children }: EditorialSectionProps) => {
  return (
    <div className={"grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-24 items-center"}>
      <div className={reversed ? "order-1 lg:order-2" : "order-1"}>
        <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
          {overline}
        </p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-space-grotesk tracking-tight text-foreground leading-[1.1] mb-4">
          {headline}
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-[540px]">
          {description}
        </p>
      </div>
      <div className={reversed ? "order-2 lg:order-1" : "order-2"}>
        {children || (
          <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10 border border-border">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border/30">
              <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/20" />
              <span className="mx-auto text-xs text-muted-foreground font-mono">brain.tensurf.ai</span>
            </div>
            <div className="p-6 space-y-3">
              <div className="h-3 w-3/4 rounded bg-muted-foreground/10" />
              <div className="h-3 w-1/2 rounded bg-muted-foreground/10" />
              <div className="h-3 w-5/6 rounded bg-muted-foreground/10" />
              <div className="h-8 w-24 rounded-md bg-primary/10 mt-4" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditorialSection;
