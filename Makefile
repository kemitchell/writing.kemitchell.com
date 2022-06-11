%.pdf: %.md
	pandoc \
		-V documentclass=article \
		-V classoption=twocolumn \
		-V papersize=letter \
		-V header-includes="\\usepackage[document]{ragged2e}\\usepackage[none]{hyphenat}" \
		--pdf-engine=xelatex \
		-o "$@" \
		$<
