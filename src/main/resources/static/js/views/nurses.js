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
                            var nurseList = $$('nurseList')
                            var id = nurseList.add({})
                            nurseList.editRow(id)
                        }
                    }
                ]
            },
            {
                id: 'nurseList',
                view: "datatable",
                columns: [
                    { id: "name", editor: "text" }

                ],
                url: 'resource->/api/nurse',
                save: 'resource->/api/nurse',
                autoheight: true,
                autowidth: true,
                editable: true,
                pager: "markPager"
            },
            {
                view: "pager",
                id: "markPager",
                size:3,
                group:3,
                template: "{common.first()}{common.prev()}{common.pages()}{common.next()}{common.last()}"
            }
        ]
    }
})
