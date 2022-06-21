%.pdf: %.md
	pandoc \
		-V documentclass=article \
		-V classoption=twocolumn,12pt \
    -V author="/dev/lawyer Draft --- $(shell date)" \
		-V papersize=letter \
		-V header-includes="\\usepackage[document]{ragged2e}\\usepackage[none]{hyphenat}\\usepackage[letterpaper,margin=1in]{geometry}" \
		--pdf-engine=xelatex \
		-o "$@" \
		$<
