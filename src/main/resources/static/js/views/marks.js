define(function() {
    return {
        rows: [
            {
                view: 'toolbar',
                cols: [
                    {
                        view: 'button',
                        label: '+ Add patient',
                        click: function() {
                            var markList = $$('markList')
                            var id = markList.add({})
                            markList.editRow(id)
                        },
                    },

                ]
            },

            {
                id: 'markList',
                view: "datatable",

                columns: [
                    { id: "firstname", editor: "text", header:[ "First name", {content:"textFilter"}]},
                    { id: "lastname", editor: "text", header:[ "Last name", {content:"textFilter"}] },
                    { id: "date_of_birthday", width: 150, editor: "text", header:[ "Date of birth", {content:"textFilter"}] },
                    { id: "height", editor: "text", header:[ "Height", {content:"textFilter"}] },
                    { id: "width", editor: "text", header:[ "Width", {content:"textFilter"}] },
                    { id: "rhesus_factor", editor: "text", header:[ "Rhesus Factor", {content:"textFilter"}] },
                    { id: "blood_type", editor: "text", header:[ "Blood type", {content:"textFilter"}] },


                ],

                url: 'resource->/api/mark',
                save: 'resource->/api/mark',
                autoheight: true,
                autowidth: true,
                editable: true,
                // pager: "markPager"
            },
            // {
            //     view: "pager",
            //     id: "markPager",
            //     size:3,
            //     group:3,
            //     template: "{common.first()}{common.prev()}{common.pages()}{common.next()}{common.last()}"
            // }
        ]
    }
})
