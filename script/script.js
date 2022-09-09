'use strict';

(function ()
{

    /**** SHOW AND HIDE THE NAVIGATION MENU ON MOBILE ****/
    const navigationMenuHeader = document.querySelector('.navigation-menu--header');
    const mainHeader = document.querySelector('.main-header');

    document.querySelector('.open-menu-icon').addEventListener('click', function(){
        navigationMenuHeader.style.transition = 'none';
        navigationMenuHeader.style.display = 'flex';
        navigationMenuHeader.style.transition = '';
        navigationMenuHeader.offsetHeight;
        mainHeader.classList.add('navigation-menu--header--show');
    });

    document.querySelector('.close-menu-icon').addEventListener('click', function(){
        mainHeader.classList.remove('navigation-menu--header--show');
    });
    
    navigationMenuHeader.addEventListener('transitionend', function(){
        if (!mainHeader.classList.contains('navigation-menu--header--show'))
        {
            this.style.display = 'none';
        }
    });
    
    /********* SHOWING AND HIDING FEATURED TABS ***********/
    const tabsContainer = document.querySelector('#features-tabs');
    const featuresContainer = document.querySelector('.features-container');

    /**
     * Shows a feature and hide the rest.
     *
     * @param {type} index The index of the feature to show.
     */
    const showFeature = function (index)
    {
        featuresContainer.querySelectorAll('.feature').forEach(feature => {
            if (feature.dataset.tabindex === index)
            {
                feature.classList.add('selected-feature');
            }
            else
            {
                feature.classList.remove('selected-feature');
            }
        });
    };

    tabsContainer.addEventListener('click', function (event)
    {
        event.preventDefault();
        const clickedTab = event.target.closest('[data-target-tab]');
        if (!clickedTab || clickedTab.classList.contains('selected-tab'))
        {
            return;
        }

        clickedTab.classList.add('selected-tab');
        tabsContainer.querySelectorAll('.heading-5').forEach(tab => {
            if (tab !== clickedTab)
            {
                tab.classList.remove('selected-tab');
            }
        });

        showFeature(clickedTab.dataset.targetTab);
    });
    
    /********* SHOWING AND HIDING FAQ ANSWERS ***********/
    const faqList = document.querySelector('.faq-list');
    faqList.addEventListener('click', function(event) {
        event.preventDefault();
        const clickedQuestion = event.target.closest('.question');
        if (!clickedQuestion)
        {
            return;
        }
        
        clickedQuestion.classList.toggle('opened');
        const answer = clickedQuestion.closest('li').querySelector('.paragraph-container');
        if (!answer.style.maxHeight)
        {
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
        else 
        {
            answer.style.maxHeight = null;
        }
    });
})();
