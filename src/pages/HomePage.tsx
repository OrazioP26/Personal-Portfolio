import { Link } from 'react-router-dom';
import { TopHeader } from '../components/TopHeader';
import { Hero } from '../components/Hero';
import { Section } from '../components/Section';
import { Row } from '../components/Row';
import { Footer } from '../components/Footer';
import { work } from '../content/work';
import { cornell } from '../content/cornell';

const WORK_BASE_DELAY = 1500;
const CORNELL_BASE_DELAY = 1900;
const ROW_STAGGER = 90;

export function HomePage() {
  return (
    <div className="frame">
      <TopHeader variant="home" />

      <Hero />

      <Section label="§ 01 · Work">
        {work.map((row, i) => (
          <Row
            key={`${row.ttl}-${i}`}
            yr={row.yr}
            ttl={row.ttl}
            role={row.role}
            desc={row.desc}
            hi={row.hi}
            delayMs={WORK_BASE_DELAY + i * ROW_STAGGER}
          />
        ))}
      </Section>

      <Section label="§ 02 · Cornell">
        {cornell.map((row, i) => (
          <Row
            key={`${row.ttl}-${i}`}
            yr={row.yr}
            ttl={row.ttl}
            role={row.role}
            desc={row.desc}
            delayMs={CORNELL_BASE_DELAY + i * ROW_STAGGER}
          />
        ))}
      </Section>

      <Section label="§ 03 · Writing">
        <Link to="/writing" className="row-link">
          <div className="row-grid" style={{ animationDelay: '2200ms' }}>
            <span className="row-yr">New</span>
            <span className="row-ttl">
              <span className="row-name">Thoughts &amp; takes</span>
              <span className="row-role">Coming soon</span>
            </span>
            <span className="row-desc">
              Notes on what I'm building, reading, and thinking about.{' '}
              <span style={{ color: 'var(--accent)' }}>Read →</span>
            </span>
          </div>
        </Link>
      </Section>

      <Footer variant="home" />
    </div>
  );
}
