define(function() {
    return {
        rows: [
            {

                view: 'toolbar',
                cols: [
                    {
                        view: 'button',
                        label: '+ Add nurse',
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
                    { id: "name", width: 150, editor: "text", header: "Name" },
                    { id: "age", editor: "text", header: "Age"  },
                    { id: "salary_of_nurse", editor: "text", header: "Salary"  }

                ],
                url: 'resource->/api/nurse',
                save: 'resource->/api/nurse',
                autoheight: true,
                autowidth: true,
                editable: true
            },
            {
                view: '',
                cols: [
                    {
                        view: 'button',
                        label: 'Procedures',
                        click: function() {
                        }
                    },

                ]
            },

            {
                id: 'nurseList',
                view: "datatable",
                columns: [
                    { id: "name", width: 150, editor: "text", header: "Name" },
                    { id: "procedures",width: 800, editor: "text", header: "Procedures"  },
                    { id: "done_procedures",width: 150, editor: "text", header: "Done procedures"  }

                ],
                url: 'resource->/api/nurse',
                save: 'resource->/api/nurse',
                autoheight: true,
                autowidth: true,
                editable: true
            },
            {
                view: '',
                cols: [
                    {
                        view: 'button',
                        label: 'Patients',
                        click: function() {
                        }
                    },

                ]
            },
            {
                id: 'markList',
                view: "datatable",

                columns: [
                    { id: "firstname", editor: "text", header:[ "First name", {content:"textFilter"}]},
                    { id: "lastname", editor: "text", header:[ "Last name", {content:"textFilter"}] },
                    { id: "rhesus_factor", editor: "text", header:[ "Rhesus Factor", {content:"textFilter"}] },
                    { id: "blood_type", editor: "text", header:[ "Blood type", {content:"textFilter"}] },
                    { id: "diagnosis", editor: "text", header:[ "Diagnosis", {content:"textFilter"}] },


                ],

                url: 'resource->/api/mark',
                save: 'resource->/api/mark',
                autoheight: true,
                autowidth: true,
                editable: true,
                // pager: "markPager"
            }

        ]
    }
})
