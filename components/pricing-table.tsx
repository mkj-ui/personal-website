import {
  PHOTOGRAPHER,
  PRICING_NOTES,
  PRICING_TIERS,
} from "@/lib/portfolio-data"

export function PricingTable() {
  return (
    <section id="pricing" className="border-t border-border py-20 md:py-28">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] lg:gap-14">
        <div className="space-y-3">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            02 / Commissions
          </p>
          <h2
            id="pricing-heading"
            className="font-heading text-3xl font-normal tracking-tight text-balance md:text-4xl"
          >
            Studio Rates
          </h2>
          <p className="max-w-[44ch] text-sm text-pretty text-muted-foreground">
            Clear session fees for individual sittings, editorial stories, and
            architectural documentation. Custom multi-day schedules are quoted
            on request.
          </p>
          <div className="pt-2">
            <a
              href={`mailto:${PHOTOGRAPHER.email}?subject=${encodeURIComponent(
                "Commission Availability & Estimate"
              )}`}
              className="inline-flex min-h-9 items-center gap-2 border-b border-foreground/40 pb-0.5 text-sm font-medium text-foreground transition-colors hover:border-foreground"
            >
              <span>Request availability</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <div
            tabIndex={0}
            role="region"
            aria-labelledby="pricing-table-caption"
            className="pricing-table-region"
          >
            <table className="pricing-table text-left text-sm">
              <caption id="pricing-table-caption" className="sr-only">
                Photography commission tiers, scope, deliverables, turnaround,
                and studio rates
              </caption>
              <thead>
                <tr className="border-b border-border font-mono text-[11px] tracking-wider text-muted-foreground uppercase">
                  <th scope="col" className="py-3.5 pr-6 font-medium">
                    Commission
                  </th>
                  <th scope="col" className="py-3.5 pr-6 font-medium">
                    Scope &amp; Session
                  </th>
                  <th scope="col" className="py-3.5 pr-6 font-medium">
                    Deliverables
                  </th>
                  <th scope="col" className="py-3.5 pr-6 font-medium">
                    Turnaround
                  </th>
                  <th scope="col" className="py-3.5 text-right font-medium">
                    Rate
                  </th>
                </tr>
              </thead>
              <tbody>
                {PRICING_TIERS.map((tier) => (
                  <tr
                    key={tier.id}
                    className="border-b border-border/80 align-baseline transition-colors hover:bg-muted/40"
                  >
                    <th
                      scope="row"
                      className="py-5 pr-6 font-heading text-lg font-normal text-foreground"
                    >
                      {tier.commission}
                    </th>
                    <td className="py-5 pr-6 text-muted-foreground">
                      {tier.scope}
                    </td>
                    <td className="py-5 pr-6 text-muted-foreground">
                      {tier.deliverables}
                    </td>
                    <td className="py-5 pr-6 font-mono text-xs whitespace-nowrap text-muted-foreground tabular-nums">
                      {tier.turnaround}
                    </td>
                    <td className="py-5 text-right font-mono text-sm font-medium whitespace-nowrap text-foreground tabular-nums">
                      {tier.rate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <ul className="space-y-2 border-l border-border pl-4 text-xs leading-relaxed text-muted-foreground">
            {PRICING_NOTES.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
