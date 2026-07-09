import { site, locations } from '../data/site';

/** Ensure trailing slash for consistent canonicals + crawl paths */
export function withTrailingSlash(path: string): string {
  if (!path || path === '/') return '/';
  const [pathname, query = ''] = path.split('?');
  const clean = pathname.endsWith('/') ? pathname : `${pathname}/`;
  return query ? `${clean}?${query}` : clean;
}

export function absoluteUrl(path = '/'): string {
  const normalized = path.startsWith('http')
    ? path
    : new URL(withTrailingSlash(path.startsWith('/') ? path : `/${path}`), site.url).toString();
  return normalized;
}

export function absoluteAsset(path: string): string {
  if (path.startsWith('http')) return path;
  return new URL(path.startsWith('/') ? path : `/${path}`, site.url).toString();
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${site.url}/#business`,
    name: site.name,
    alternateName: site.shortName,
    description: site.defaultSeo.description,
    image: [absoluteAsset(site.ogImage), absoluteAsset(site.logo)],
    logo: absoluteAsset(site.logo),
    url: `${site.url}/`,
    telephone: site.phoneTel,
    email: site.email,
    priceRange: site.priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: site.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      // Approximate Plant City HQ — replace with exact GBP lat/long before launch
      latitude: 28.0189,
      longitude: -82.1201,
    },
    hasMap: site.mapsUrl,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [...site.hours.schema.days],
        opens: site.hours.schema.opens,
        closes: site.hours.schema.closes,
        description: site.hours.label,
      },
    ],
    areaServed: locations.map((l) => ({
      '@type': 'City',
      name: `${l.city}, FL`,
    })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: site.rating.value,
      reviewCount: String(site.rating.count),
      bestRating: '5',
      worstRating: '1',
    },
    sameAs: [site.facebookUrl, site.googleBusinessUrl].filter(Boolean),
    additionalType: 'https://www.productontology.org/id/Tree_care',
    knowsAbout: [
      'Tree removal',
      'Tree trimming',
      'Storm damage cleanup',
      'Stump grinding',
      'Emergency tree service',
    ],
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    url: `${site.url}/`,
    name: site.name,
    description: site.defaultSeo.description,
    publisher: { '@id': `${site.url}/#business` },
    inLanguage: 'en-US',
  };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
