%.pdf: %.md
	pandoc \
		-V documentclass=article \
		-V classoption=twocolumn \
    -V author="/dev/lawyer Draft --- $(shell date)" \
		-V papersize=letter \
		-V header-includes="\\usepackage[document]{ragged2e}\\usepackage[none]{hyphenat}\\usepackage[letterpaper,margin=0.5in]{geometry}" \
		--pdf-engine=xelatex \
		-o "$@" \
		$<
