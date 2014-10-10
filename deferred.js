(function () {

    cDeferred = {
        init: function () {
            var me = this;
            var loadImageIfVisible = function () {

                $("img").each(function (index) {
                    if (!$(this).hasClass("load") && me.isScrolledIntoView(this)) {
                            $(this).addClass("load");
                    }
                });
            };
            $(window).scroll(loadImageIfVisible);
            loadImageIfVisible();
        },

        isScrolledIntoView: function (elem)
        {
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();

            var elemTop = $(elem).offset().top;
            var elemBottom = elemTop + $(elem).height();

            return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
        }

    };

}).call(this);
