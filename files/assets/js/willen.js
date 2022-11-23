// You can find instructions for this file at http://www.treeview.net

//Environment variables are usually set at the top of this file.
USETEXTLINKS = 1
STARTALLOPEN = 0
USEFRAMES = 0
USEICONS = 0
WRAPTEXT = 1
PERSERVESTATE = 1


foldersTree = gFld("<b></b>", "")
  aux1 = insFld(foldersTree, gFld("STAMBOOM FAMILIE WILLEN", "javascript:undefined"))
    aux2 = insFld(aux1, gFld("<b>Theodore Jozef Willen</b> x Maria Sidonia Coussement", ""))
	aux3 = insFld(aux2, gFld("Sofie Willen x ??? Toussin", ""))
		aux4 = insFld(aux3, gFld("Helene Toussin", ""))
		aux4 = insFld(aux3, gFld("Paul Toussin", ""))
		aux4 = insFld(aux3, gFld("Robert Toussin", ""))
	aux3 = insFld(aux2, gFld("Sofie Willen x Leopold Verwerft", ""))
		aux4 = insFld(aux3, gFld("Willy Verwerft", ""))
	aux3 = insFld(aux2, gFld("<b>Octaaf Willen</b> x Maria Rosalia Van Coster", ""))
	    aux4 = insFld(aux3, gFld("<b>Gaston Willen</b> x Adrienne Blommaert", ""))
		aux5 = insFld(aux4, gFld("Andre Willen x Anne-Marie Ameels", ""))
 			aux6=insFld(aux5, gFld("Marianne x Koen Vermeersch", ""))
        insDoc(aux6, gLnk("S", "Cleo", ""))
        insDoc(aux6, gLnk("S", "Margot", ""))
 			insDoc(aux5, gLnk("S", "Jo", ""))
		aux5 = insFld(aux4, gFld("Monique Willen x Herman Teirlinck", ""))
			aux6 = insFld(aux5, gFld("Geert Teirlinck x Linda Van Parijs", ""))
	 			insDoc(aux6, gLnk("S", "Bram", ""))
 				insDoc(aux6, gLnk("S", "Stef", ""))
      aux6 = insFld(aux5, gFld("Christel x Gert", ""))
 			  insDoc(aux6, gLnk("S", "Lisa", ""))
 			insDoc(aux5, gLnk("S", "Bart", ""))

		aux5 = insFld(aux4, gFld("Bernard Willen x Marie-Claire Teirlinck", ""))
			aux6 = insFld(aux5, gFld("Filip Willen x Claudine De Munster", ""))
	 			insDoc(aux6, gLnk("S", "Michelle", ""))
 				insDoc(aux6, gLnk("S", "Iris", ""))
	 			insDoc(aux6, gLnk("S", "Julie", ""))
 				insDoc(aux6, gLnk("S", "Cedric", ""))
			aux6 = insFld(aux5, gFld("Mia Willen x Stefaan Sobry", ""))
				insDoc(aux6, gLnk("S", "Emma", ""))
 				insDoc(aux6, gLnk("S", "Thijs", ""))
			aux6 = insFld(aux5, gFld("Wim Willen x Greet De Bruyne", ""))
        insDoc(aux6, gLnk("S", "Jules", ""))
        insDoc(aux6, gLnk("S", "Anna", ""))
        insDoc(aux6, gLnk("S", "Remi", ""))

		aux5 = insFld(aux4, gFld("Calix Willen x Agnes Vantyghem", ""))
			aux6 = insFld(aux5, gFld("Peter Willen x Nathalie Vermassen", ""))
 				insDoc(aux6, gLnk("S", "Hannelore", ""))
				insDoc(aux6, gLnk("S", "Lukas", ""))
			aux6 = insFld(aux5, gFld("Koen Willen x Valerie Vermassen", ""))
				insDoc(aux6, gLnk("S", "Justine", ""))
				insDoc(aux6, gLnk("S", "Thibaut", ""))

		aux5 = insFld(aux4, gFld("Eric Willen x Marleen Bruneel", ""))
		    aux6 = insFld(aux5, gFld("Kristof Willen x Martine De Wilde", ""))
				insDoc(aux6, gLnk("S", "Luna", ""))
				insDoc(aux6, gLnk("S", "Lenthe", ""))
			insDoc(aux5, gLnk("S", "Veroniek Willen x Raf Vanhoutte", ""))

		aux5 = insFld(aux4, gFld("Paul Willen x Agnes Pot", ""))
			aux6 = insFld(aux5, gFld("Hilde Willen x Steven Vandeputte", ""))
 				insDoc(aux6, gLnk("S", "Bert", ""))
 				insDoc(aux6, gLnk("S", "Tim", ""))
			aux6 = insFld(aux5, gFld("Els Willen x Frank Willems", ""))
 				insDoc(aux6, gLnk("S", "Nienke", ""))
 				insDoc(aux6, gLnk("S", "Nils", ""))
			aux6 = insFld(aux5, gFld("Leen Willen x Kristof Vanacker", ""))
 				insDoc(aux6, gLnk("S", "Wout", ""))
 				insDoc(aux6, gLnk("S", "Fleur", ""))
			aux6 = insFld(aux5, gFld("Steven Willen x Annemie Bostijns", ""))

		aux5 = insFld(aux4, gFld("Jose Willen x Annie Defeyter", ""))
			aux6 = insFld(aux5, gFld("Stijn x Liesbeth ", ""))
 			insDoc(aux6, gLnk("S", "Hazel", ""))

		aux5 = insFld(aux4, gFld("Marc Willen x Christine Dumortier", ""))
 			insDoc(aux5, gLnk("S", "Benny", ""))
 			insDoc(aux5, gLnk("S", "Virginie", ""))
 			insDoc(aux5, gLnk("S", "Aline", ""))

		aux5 = insFld(aux4, gFld("Christine Willen x Willy De Baets", ""))
 			aux6 = insFld(aux5, gFld("Katrien x Stefaan Thijs", ""))
      	insDoc(aux6, gLnk("S", "Joran", ""))
      	insDoc(aux6, gLnk("S", "Jolien", ""))
 			aux6 = insFld(aux5, gFld("Mieke x Dirk Martens", ""))
 			  insDoc(aux6, gLnk("S", "Lina", ""))

		aux5 = insFld(aux4, gFld("Luc Willen x Ludwine Schepens", ""))
 			aux6 = insFld(aux5, gFld("Dimitri x Ilse Mahieur", ""))
 			  insDoc(aux6, gLnk("S", "Yannick", ""))
        insDoc(aux6, gLnk("S", "Loic", ""))
 			insDoc(aux5, gLnk("S", "Mario", ""))
     aux6 = insFld(aux5, gFld("Diederiek x Mieke Vanderstraeten", ""))
 			insDoc(aux6, gLnk("S", "Jean-Louis", ""))

		aux5 = insFld(aux4, gFld("Lieve Willen x Marc Jourquin", ""))
 			insDoc(aux5, gLnk("S", "Frederik", ""))
 			aux6 = insFld(aux5, gFld("David x Kelly Wauters", ""))
      	insDoc(aux6, gLnk("S", "Kiona", ""))
        insDoc(aux6, gLnk("S", "Kjenta", ""))
        insDoc(aux6, gLnk("S", "Yitka", ""))

		aux5 = insFld(aux4, gFld("Johan Willen x Myriam Adriaens", ""))
 			insDoc(aux5, gLnk("S", "Jan", ""))
 			insDoc(aux5, gLnk("S", "Carolien", ""))


	    aux4 = insFld(aux3, gFld("Maurice Willen x Gabrielle Blommaert", ""))
 			insDoc(aux4, gLnk("S", "Leon", ""))
 			insDoc(aux4, gLnk("S", "Therese", ""))
	    aux4 = insFld(aux3, gFld("Marcel Willen x Anna ???", ""))
 			insDoc(aux4, gLnk("S", "Gilbert", ""))

	    aux4 = insFld(aux3, gFld("Marcel Willen x Blanche Sintobin", ""))
 			insDoc(aux4, gLnk("S", "Robert", ""))
 			insDoc(aux4, gLnk("S", "Anne-Marie", ""))
 			insDoc(aux4, gLnk("S", "Michel", ""))
 			insDoc(aux4, gLnk("S", "Corine", ""))
 			insDoc(aux4, gLnk("S", "Philip", ""))

	    aux4 = insFld(aux3, gFld("Helene Willen x Charles Huysmans", ""))
 			insDoc(aux4, gLnk("S", "Robert Huysmans", ""))

	    aux4 = insFld(aux3, gFld("Aimez Willen x Rosa Van Mallegem", ""))
 			insDoc(aux4, gLnk("S", "Frans Willen", ""))
 			insDoc(aux4, gLnk("S", "Lieven Willen", ""))

	    aux4 = insFld(aux3, gFld("Leon Willen x Elisabeth De Bo", ""))
 			insDoc(aux4, gLnk("S", "Guy Willen", ""))

	aux3 = insFld(aux2, gFld("Eugeen Willen", ""))
	aux3 = insFld(aux2, gFld("Gaston Willen x ??? Coppieters", ""))



