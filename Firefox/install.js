var err = initInstall("Korean Dictionary", "ko-KR@dictionaries.addons.mozilla.org", "0.6.40.7.10.7.10.7.10.7.1-1");
if (err != SUCCESS)
    cancelInstall();

var fProgram = getFolder("Program");
err = addDirectory("", "ko-KR@dictionaries.addons.mozilla.org",
		   "dictionaries", fProgram, "dictionaries", true);
if (err != SUCCESS)
    cancelInstall();

performInstall();
