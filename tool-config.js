export const tool={
  "id": "E112",
  "slug": "eng-barrier-tunneling",
  "title": "사각 장벽 터널링 확률 계산기",
  "title_en": "Rectangular Barrier Transmission Calculator",
  "category": "양자",
  "category_en": "Quantum",
  "fields": [
    {
      "key": "mass",
      "label": "입자 질량 m",
      "label_en": "Particle mass m",
      "dimension": "mass",
      "example": 9.1093837139e-31,
      "constraint": "positive",
      "display_unit": "u",
      "display_value": "0.00054857990904271002"
    },
    {
      "key": "energy",
      "label": "입사 운동에너지 E",
      "label_en": "Incident kinetic energy E",
      "dimension": "energy",
      "example": 3.204353268e-19,
      "constraint": "positive",
      "display_unit": "J",
      "display_value": "3.2043532679999998e-19"
    },
    {
      "key": "barrier",
      "label": "장벽 높이 U",
      "label_en": "Barrier height U",
      "dimension": "energy",
      "example": 6.408706536e-19,
      "constraint": "nonnegative",
      "display_unit": "J",
      "display_value": "6.4087065359999996e-19"
    },
    {
      "key": "width",
      "label": "장벽 폭 a",
      "label_en": "Barrier width a",
      "dimension": "length",
      "example": 2e-10,
      "constraint": "nonnegative",
      "display_unit": "nm",
      "display_value": "0.19999999999999998"
    }
  ],
  "result_label": "장벽 투과확률 T",
  "result_label_en": "Barrier transmission probability T",
  "result_dimension": "fraction",
  "formula": "E<U: T=[1+U²sinh²(κa)/(4E(U−E))]⁻¹; E=U: T=[1+mUa²/(2ℏ²)]⁻¹; E>U: T=[1+U²sin²(qa)/(4E(E−U))]⁻¹",
  "purpose": "유한 폭 사각 장벽의 투과확률을 장벽 아래·경계·위 에너지에서 계산한다.",
  "purpose_en": "Calculate the transmission probability below, at and above a rectangular barrier.",
  "assumptions": "m,E>0이며 U,a≥0이다. 장벽 양쪽의 위치에너지는 0이고 질량은 모든 영역에서 같다. 1차원 정상 산란과 비상대론적 입자를 가정한다. max(E,U)/(mc²)≤0.01로 제한한다. κ=√(2m(U−E))/ℏ, q=√(2m(E−U))/ℏ이다. E=U의 극한과 큰 sinh를 안정적으로 처리하며, 위상 qa>10¹²인 장벽 위 입력은 수치 정확도 때문에 거부한다. 표현 범위보다 작은 양의 확률을 0으로 바꾸지 않는다. 장벽 위 공진 근처에서 위상 반올림 오차에 민감한 입력도 정밀도 오류로 거부한다.",
  "assumptions_en": "Required: m,E>0 and U,a≥0. The exterior potential is zero on both sides and the mass is identical in all regions. Use one-dimensional stationary nonrelativistic scattering with max(E,U)/(mc²)≤0.01. Here κ=√(2m(U−E))/ℏ and q=√(2m(E−U))/ℏ. The threshold limit and large hyperbolic sine are evaluated stably. Above-barrier phases qa>10¹² are rejected to preserve numerical accuracy. Positive probabilities below the numeric range are reported as errors. Above-barrier resonance inputs that are sensitive to phase-rounding uncertainty are also rejected with a precision error.",
  "sources": [
    {
      "label": "OpenStax · Quantum tunneling through potential barriers",
      "url": "https://openstax.org/books/university-physics-volume-3/pages/7-6-the-quantum-tunneling-of-particles-through-potential-barriers"
    }
  ],
  "condition": "",
  "condition_en": "",
  "output_unit": "percent",
  "site": "https://nanalab.kr/eng-barrier-tunneling/",
  "repository": "https://github.com/NaNaCompany/eng-barrier-tunneling",
  "groups": []
};
