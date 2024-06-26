    // Checks for a valid email address
    //
    // Returns true if a valid email
    // false otherwise.
    function checkEmail(emailStr) {

        // checks if the e-mail address is valid
		var emailPat = /^(([a-zA-Z0-9])+([\.a-zA-Z0-9_-])*@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-]+)*(\.[a-zA-Z]+))$/;

        if (emailPat.test(emailStr)) {
        	return true;
        }
	return false;
    }

    /**
     * getElementById like function to get one
     * element by the name
     */
    function getElementByName(name, parentEl) {
    	if (!parentEl) {
    		parentEl=document;
    	}
    	elements=parentEl.getElementsByName(name);

		if (elements.length > 0) {
        	return elements[0];
        } else {
        	return false;
        }
    }

    //checks that there aren't any numbers

    function alpha(txt)
    {
        var flag=true;
        var i,code;

        if(txt.value=='')
            return false;

        for(i=0;txt.value.length>i;i++)
        {
	       code=txt.value.charCodeAt(i);

           if (code>=48 && code<=57) {
	           flag=false;
               break;
           }
	       else
	           flag=true;

	    }
    return flag;
    }

    //check to see whether a valid phone number
    // This function and calls to it should be removed and replaced with the checkPhone() function below.
    function numeric(txt)
    {
        var flag=true;

        for(i=0;txt.value.length>i;i++){

            code=txt.value.charCodeAt(i);

            if ( ( (code>=48) && (code<=57) ) || (code == 45) || (code == 43))
                flag=true
            else
            {
                flag=false;
                break;
            }
        }
    return flag;
    }


    //check to see whether a valid phone number
    function checkPhone(txt)
    {
        var flag=true;

        for(i=0;txt.value.length>i;i++){

            code=txt.value.charCodeAt(i);

            if ( ( (code>=48) && (code<=57) ) || (code == 45) || (code == 43))
                flag=true
            else
            {
                flag=false;
                break;
            }
        }
    return flag;
    }

    function numbers(txt)
	{
    	var flag=true;

    	for (i=0;txt.value.length>i;i++) {

        	code=txt.value.charCodeAt(i);

        	if ( (code >= 48) && (code <= 57) ) {

            	flag=true;
            }
        	else
        	{
            	flag=false;
            	break;
        	}
    	}
	return flag;
	}

	function nonNumbers(txt) {

    	var notNum="";
    	var flag=true;

    	for (i=0;txt.value.length>i;i++) {

        	code=txt.value.charCodeAt(i);

        	if ( (code>=48) && (code<=57) )
            	flag=true
        	else
        	{
            	flag=false;
            	notNum=notNum+" '"+txt.value.charAt(i)+"'";
        	}
    	}
	return notNum;
	}

	function clearAll() {
		//need to work
		document.forms[0].reset('');
	}

	/**
	 * Trims any leading zeros from a number
	 */
	function trimLeadingZeros(num) {
		while (num.substr(0,1) == '0' && num.length>1) {
			num = num.substr(1,9999);
		}
		return num;
	}

	/**
	 * Prototype framework like function to access elements by Id
	 */
	function $(id) {
		return document.getElementById(id);
	}

	/**
	 * Trim whitespace from a string.
	 */
	function trim(s) {
		return s.trim();
	}

	String.prototype.trim = function () {
		regExp = /^\s+|\s+$/g;
		str = this;

		return str.replace(regExp, "");
	}

    /**
     * Collects all form element values to build a post string
     *
     * Used with YUI! connection to post data
     */
    function buildPostString(formId) {
    	postStr="";
    	elements=$(formId).elements;

    	for (i=0; elements.length>i; i++) {
    		if (i > 0) {
    			postStr+="&";
    		}
    		postStr+=elements[i].name+"="+elements[i].value;
    	}

    	return postStr;
    }

    /**
     * Used to generate page links
     */
    function printPageLinks(recordCount, currentPage) {
		strpagedump= "" ;

		if (recordCount) {
	    	recCount = recordCount;
		} else {
			recCount = 0;
		}

		noPages = Math.ceil(recCount/ITEMS_PER_PAGE);

		if (noPages > 1) {

			if(currentPage == 1) {
				strpagedump += "<font color='Gray'>"+LANG_NAV_FIRST+"</font>";
		    	strpagedump += "  ";
				strpagedump += "<font color='Gray'>"+LANG_NAV_PREVIOUS+"</font>";
			} else {
	    		strpagedump += "<a href='javascript:chgPage(1);'>"+LANG_NAV_FIRST+"</a>";
		    	strpagedump += "  ";
	    		strpagedump += "<a href='javascript:prevPage();'>"+LANG_NAV_PREVIOUS+"</a>";
			}

	    	strpagedump += "  ";

			lowerLimit = ((currentPage - PAGE_NUMBER_LIMIT) <= 0) ? 1 : (currentPage - PAGE_NUMBER_LIMIT);
			c = lowerLimit;
			while(c < currentPage) {
	    		strpagedump += "<a href='javascript:chgPage(" +c+ ");'>" +c+ "</a>";
		    	strpagedump += "  ";
				c++;
			}

	    	strpagedump += "  " + currentPage +"  ";


			upperLimit = ((currentPage + PAGE_NUMBER_LIMIT) >= noPages) ? noPages : (currentPage + PAGE_NUMBER_LIMIT);
			c = currentPage + 1;
			while(c <=  upperLimit) {
	    		strpagedump += "<a href='javascript:chgPage(" +c+ ");'>" +c+ "</a>";
		    	strpagedump += "  ";
			    c++;
			}

			if (currentPage == noPages) {
				strpagedump += "<font color='Gray'>"+LANG_NAV_NEXT+"</font>";
		    	strpagedump += "  ";
				strpagedump += "<font color='Gray'>"+LANG_NAV_LAST+"</font>";
			} else {
	    		strpagedump += "<a href='javascript:nextPage();'>"+LANG_NAV_NEXT+"</a>";
		    	strpagedump += "  ";
	    		strpagedump += "<a href='javascript:chgPage(" +noPages+ ");'>"+LANG_NAV_LAST+"</a>";
			}
		}

		return strpagedump;
	}

	/**
	 * Move the currently selected options from the 'from' select list to the 'to' select list
	 *
	 * @param from From select object
	 * @param to   To select object
	 * @errorWhenNotSelected The error message to show if no option selected
	 */
	function moveSelectOptions(from, to, errorWhenNotSelected) {

		if (from.selectedIndex == -1) {
			if (errorWhenNotSelected != "") {
				alert(errorWhenNotSelected);
			}
			return;
		}

		var fromLength = from.length;
		var toLength = to.length;
		var selected = new Array();
		var numSelected = 0;

		for (i = fromLength - 1; i>=0; i--) {
			if (from.options[i].selected) {

				selected[numSelected] = from.options[i];
				from.options[i] = null;
				numSelected++;
			}
		}

		for (i = numSelected - 1; i >= 0; i--) {
			to.options[toLength] = selected[i];
			toLength++;
		}
	}

	/**
	 * Select all options of the given select object.
	 */
	function selectAllOptions(selectObj) {
		var selLength = selectObj.length;
		for (i = 0 ; i < selLength; i++) {
			selectObj.options[i].selected = true;
		}
	}

	function printPage(page) {
		if (page.print) {
			page.print() ;
		} else {
    		var WebBrowser = '<OBJECT ID="WebBrowser1" WIDTH=0 HEIGHT=0 CLASSID="CLSID:8856F961-340A-11D0-A96B-00C04FD705A2"></OBJECT>';
			page.document.body.insertAdjacentHTML('beforeEnd', WebBrowser);
			WebBrowser1.ExecWB(6, 2);//Use a 1 vs. a 2 for a prompting dialog box    WebBrowser1.outerHTML = "";
		}
	}

	function getObj(name) {
		if (document.getElementById) {
			this.obj = document.getElementById(name);
			this.style = document.getElementById(name).style;
		} else if (document.all) {
			this.obj = document.all[name];
			this.style = document.all[name].style;
		} else if (document.layers) {
			this.obj = document.layers[name];
			this.style = document.layers[name];
		}
}