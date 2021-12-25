define(function() {
    return {
        rows: [
            {
                view: 'toolbar',
                cols: [
                    {
                        view: 'button',
                        label: 'Add',
                        click: function() {
                            var markList = $$('markList')
                            var id = markList.add({})
                            markList.editRow(id)
                        }
                    }
                ]
            },
            {
                id: 'markList',
                view: "datatable",
                columns: [
                    { id: "firstname", editor: "text" },
                    { id: "lastname", editor: "text" },
                    { id: "date_of_birthday", editor: "text" },
                    { id: "height", editor: "text" },
                    { id: "width", editor: "text" },
                    { id: "rhesus_factor", editor: "text" },
                    { id: "blood_type", editor: "text" }


                ],
                url: 'resource->/api/mark',
                save: 'resource->/api/mark',
                autoheight: true,
                autowidth: true,
                editable: true,
                pager: "markPager"
            },
            {
                view: "pager",
                id: "markPager",
                size:5,
                group:5,
                template: "{common.first()}{common.prev()}{common.pages()}{common.next()}{common.last()}"
            }
        ]
    }
})
