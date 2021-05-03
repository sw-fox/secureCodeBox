const { scan } = require("../helpers");

test(
  "ZAP-extended scan without config YAML against a plain 'nginx container' should only find couple findings",
  async () => {
    const { count } = await scan(
      "zap-extended-scan-nginx-demo",
      "zap-extended-scan",
      ["-t", "http://nginx.demo-apps.svc"],
      60 * 6
    );

    // There must be at least one finding
    expect(count).toBeGreaterThanOrEqual(1);
  },
  6 * 60 * 1000
);

test(
  "ZAP-extended scan without config YAML against 'bodgeit' container should only find couple findings",
  async () => {
    const { count } = await scan(
      "zap-extended-scan-bodgeit-demo",
      "zap-extended-scan",
      ["-t", "http://bodgeit.demo-apps.svc:8080/"],
      60 * 6
    );

    // There must be at least one finding
    expect(count).toBeGreaterThanOrEqual(1);
  },
  6 * 60 * 1000
);

test(
  "ZAP-extended scan without config YAML against 'juiceshop' should only find couple findings",
  async () => {
    const { count } = await scan(
      "zap-extended-scan-juiceshop-demo",
      "zap-extended-scan",
      ["-t", "http://juice-shop.demo-apps.svc:3000/"],
      60 * 6
    );

    // There must be at least one finding
    expect(count).toBeGreaterThanOrEqual(1);
  },
  6 * 60 * 1000
);
