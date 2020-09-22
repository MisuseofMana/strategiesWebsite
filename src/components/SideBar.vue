<template>
    <div class="sidebar-page">
        <section class="sidebar-layout">
             <b-sidebar
                position="fixed"
                mobile="hide"
                fullheight
                type="is-light"
                open
            >
                <div class="p-1">
                    <div class="block">
                    <img
                        src="../assets/imgs/logos/strategiesLogo.png"
                        alt=""
                    />
                    </div>
                    <b-menu class="is-custom-mobile">
                        <b-menu-list label="Navigation">
                            <b-menu-item icon="flag-variant-outline" label="The Strategies"></b-menu-item>
                            <b-menu-item icon="car-emergency" label="Rehab Strategies"></b-menu-item>
                            <b-menu-item icon="account-tie" label="Staffing Strategies"></b-menu-item>
                            <b-menu-item icon="bottle-tonic-plus" label="Care Strategies"></b-menu-item>
                            <b-menu-item icon="file-outline" label="Innovative Treatment Strategies"></b-menu-item>
                            <b-menu-item icon="account-multiple" label="Our Team"></b-menu-item>
                        </b-menu-list>
                    </b-menu>
                </div>
            </b-sidebar>
        </section>
    </div>
</template>

<script>
    export default {
        name:"SideBar",
        data() {
            return {
            }
        },
    }
</script>

<style lang="scss" scoped>

.p-1 {
  padding: 1em;
}
.sidebar-page {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100%;
    min-height: 100vh;
    .sidebar-layout {
        display: flex;
        flex-direction: row;
        min-height: 100%;
        min-height: 100vh;
    }
}
@media screen and (max-width: 1023px) {
    .b-sidebar {
        .sidebar-content {
            &.is-mini-mobile {
                &:not(.is-mini-expand),
                &.is-mini-expand:not(:hover) {
                    .menu-list {
                        li {
                            a {
                                span:nth-child(2) {
                                    display: none;
                                }
                            }
                            ul {
                                padding-left: 0;
                                li {
                                    a {
                                        display: inline-block;
                                    }
                                }
                            }
                        }
                    }
                    .menu-label:not(:last-child) {
                        margin-bottom: 0;
                    }
                }
            }
        }
    }
}
@media screen and (min-width: 1024px) {
    .b-sidebar {
        .sidebar-content {
            &.is-mini {
                &:not(.is-mini-expand),
                &.is-mini-expand:not(:hover) {
                    .menu-list {
                        li {
                            a {
                                span:nth-child(2) {
                                    display: none;
                                }
                            }
                            ul {
                                padding-left: 0;
                                li {
                                    a {
                                        display: inline-block;
                                    }
                                }
                            }
                        }
                    }
                    .menu-label:not(:last-child) {
                        margin-bottom: 0;
                    }
                }
            }
        }
    }
}
</style>