# 사각 장벽 터널링 확률 계산기

유한 폭 사각 장벽의 투과확률을 장벽 아래·경계·위 에너지에서 계산한다.

- ID: E112
- App: https://nanalab.kr/eng-barrier-tunneling/
- Repository: https://github.com/NaNaCompany/eng-barrier-tunneling
- Formula: E<U: T=[1+U²sinh²(κa)/(4E(U−E))]⁻¹; E=U: T=[1+mUa²/(2ℏ²)]⁻¹; E>U: T=[1+U²sin²(qa)/(4E(E−U))]⁻¹

## Model and data

m,E>0이며 U,a≥0이다. 장벽 양쪽의 위치에너지는 0이고 질량은 모든 영역에서 같다. 1차원 정상 산란과 비상대론적 입자를 가정한다. max(E,U)/(mc²)≤0.01로 제한한다. κ=√(2m(U−E))/ℏ, q=√(2m(E−U))/ℏ이다. E=U의 극한과 큰 sinh를 안정적으로 처리하며, 위상 qa>10¹²인 장벽 위 입력은 수치 정확도 때문에 거부한다. 표현 범위보다 작은 양의 확률을 0으로 바꾸지 않는다. 장벽 위 공진 근처에서 위상 반올림 오차에 민감한 입력도 정밀도 오류로 거부한다.

Inputs normalize to SI. Repeated-input models support adding/removing actual input rows. Calculations, finite-number checks and physical-domain checks run locally; no external property database or solver API is used.

## Validation

Run node --test tests/*.test.mjs and python scripts/build-locales.py --check. tests/reference.json contains independently computed high-precision default and boundary references. The source notices distinguish original MIT work from citation-only external references.

## Static languages

Korean (existing root), English (`en/`), Spanish (`es/`), Simplified Chinese (`zh/`), Japanese (`ja/`) and German (`de/`). Each page has its own canonical URL, reciprocal hreflang, localized metadata, interface, validation messages and preview image. The language links work without JavaScript. Calculation code is shared and no runtime translation API is used.

Edit `localization/*.json` for text, `src/template.html` for the shared page, and run `python scripts/build-locales.py`. Run `python scripts/build-locales.py --check` and `npm test` before publishing. Decimal commas are accepted in Spanish and German; thousands separators are not supported.
