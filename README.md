#한국어 맞춤법 검사기 확장
(Korean spellchecker extension/plugin)

===================

이 프로젝트는 리브레오피스, 파이어폭스 등에서 한국어 맞춤법 검사를 할 수 있는 
확장/플러그인을 제공합니다.
This Project provides Korean spellchecker extensions/plugins for Libreoffice,
Apache OpenOffice, and Firefox.

- LibreOffice : https://extensions.libreoffice.org/extensions/korean-spellchecker
- Firefox : https://addons.mozilla.org/ko/firefox/addon/korean-spellchecker/

이 프로젝트에서 사용하는 사전 데이터는 hunspell 한국어 데이터 프로젝트의 
데이터이며, hunspell 한국어 데이터와 동일하게 다음 라이센스 정책을 따라 배포됩니
다.(https://groups.google.com/forum/#!topic/spellcheck-ko/NlM9DA0GHWY)

	- 3중 라이센스 (GPL/LGPL/MPL)
	- 크리에이티브 커먼즈 저작자표시 4.0 국제 라이선스(CC BY 4.0)

This uses the dictionary of 'hunspell 한국어 데이터' project as a dictionary
and it follows the license of 'hunspell 한국어 데이터' project.

	- 3 licences(GPL/LGPL/MPL).
	- Creative Commons license Attribution 4.0 International (CC BY 4.0)

문의 : https://github.com/jihuichoi/korean-spellchecker

** hunspell 한국어 데이터 프로젝트
: https://github.com/spellcheck-ko/hunspell-dict-ko/



===================

## 플러그인 생성

1) 소스 다운로드
```
$ git clone https://github.com/jihuichoi/korean-spellchecker.git korean-spellchecker
```

2) Changelog 변경
```
$ cd korean-spellchecker
$ vi LibreOffice/Changelog
$ vi Firefox/Changelog

다음 예시와 같은 형식으로 추가
0.7.1-1 (2018/03/21)
- hunspell-dict-ko 업데이트(0.6.4)
```

3) 생성 스크립트 실행
```
$ ./script/make.py 새 버전
예) ./script/make.py 0.7.1
```

4) 새로 생성된 플러그인 위치
```
bin/Korean_spell-checker-버전-1_FF.xpi
bin/Korean_spell-checker-버전-1_LibO.oxt
```
