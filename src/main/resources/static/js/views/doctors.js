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
                            var doctorList = $$('doctorList')
                            var id = doctorList.add({})
                            doctorList.editRow(id)
                        }
                    }
                ]
            },
            {
                id: 'doctorList',
                view: "datatable",
                columns: [
                    { id: "name", editor: "text" },
                    { id: "spec ", editor: "text" },
                    { id: "salary", editor: "text" },

                ],
                url: 'resource->/api/doctor',
                save: 'resource->/api/doctor',
                autoheight: true,
                autowidth: true,
                editable: true,
                pager: "doctorPager"
            },
            {
                view: "pager",
                id: "doctorPager",
                size:10,
                group:3,
                template: "{common.first()}{common.prev()}{common.pages()}{common.next()}{common.last()}"
            }
        ]
    }
})
