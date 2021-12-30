define(function() {
    return {

        rows: [
            {
                view: 'toolbar',
                cols: [
                    {
                        view: 'button',
                        label: '+ Add doctor',
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
                    { id: "name", width: 150, editor: "text", header: "Name" },
                    { id: "age", editor: "text", header: "Age" },
                    { id: "specialization", width: 150, editor: "text", header: "Specialization" },
                    { id: "salary", editor: "text", header: "Salary" },


                ],
                url: 'resource->/api/doctor',
                save: 'resource->/api/doctor',
                autoheight: true,
                autowidth: true,
                editable: true,
                // pager: "doctorPager"
            },
            {
                view: 'toolbar',
                cols: [
                    {
                        view: 'button',
                        label: 'Nurses',
                        click: function() {
                        }
                    },

                ]
            },
            {
                id: 'nurseList',
                view: "datatable",
                columns: [
                    { id: "name", editor: "text", header: "Name" },
                    { id: "procedures", editor: "text", header: "Procedures" }

                ],
                url: 'resource->/api/nurse',
                save: 'resource->/api/nurse',
                autoheight: true,
                autowidth: true,
                editable: true,
                // pager: "doctorPager"
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

            // {
            //     view: "pager",
            //     id: "doctorPager",
            //     size: 100,
            //     group: 5,
            //     template: "{common.first()}{common.prev()}{common.pages()}{common.next()}{common.last()}"
            // }
        ]
    }
})
