const routes =  [
    {
        path: '/',
        redirect: '/layout'
    },
    {
        path: '/layout',
        name: 'layout',
        meta:{title:'主页',permission:'teacher'},
        component: () => import('../src/views/Layout.vue'),
        children:[
            {
                path: '/layout/projects',
                name: 'project1',
                component:() => import('../src/views/layouts/routerView.vue'),
                children:[
                    {
                        path: '/layout/projects/projectPlan',
                        name: 'project2',
                        component: () => import('../src/views/project/projectPlan.vue'),
                    },
                    {
                        path: '/layout/projects/project',
                        name: 'project3',
                        component: () => import('../src/views/project/project.vue'),
                    },
                    {
                        path: '/layout/projects/conProject',
                        name: 'conProject',
                        component: () => import('../src/views/conProject/conProject.vue'),
                    }
                ]
            }
        ]

    },
    {
        path: '/user',
        name: 'login',
        component: () => import('../src/views/user/login.vue'),
    },
    {
        path: '/selectRole',
        name: 'selectRole',
        component: () => import('../src/views/user/selectRole.vue'),
    }
]

export {routes}