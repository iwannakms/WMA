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
                editable: true
            }
        ]
    }
})
