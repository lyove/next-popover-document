import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: "Free and easy to Use",
    Svg: require("@site/static/img/free-ease.svg").default,
    description: <>Simple, easy to use, and consumes less resources.</>,
  },
  {
    title: "Pure without dependence",
    Svg: require("@site/static/img/no-dependence.svg").default,
    description: <>No external dependencies, extremely fast loading speed.</>,
  },
  {
    title: "Friendly support for typescript",
    Svg: require("@site/static/img/support-typescript.svg").default,
    description: <>Developed with typescript, fully supporting typescript.</>,
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
