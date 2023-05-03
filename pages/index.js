import styles from "./index.module.css";
const TodoDashboard = () => {
  return (
    <div className={styles.todoDashboard}>
      <div className={styles.lightMode}>
        <div className={styles.sidebar}>
          <div className={styles.sidebaritemsParent}>
            <div className={styles.sidebaritems}>
              <img className={styles.ovalsIcon} alt="" src="/ovals.svg" />
              <div className={styles.logoParent}>
                <img className={styles.logoIcon} alt="" src="/logo.svg" />
                <img className={styles.itemsIcon} alt="" src="/items.svg" />
              </div>
            </div>
            <img className={styles.icon} alt="" src="/icon.svg" />
          </div>
        </div>
        <div className={styles.projects}>
          <div className={styles.titleParent}>
            <div className={styles.title}>
              <b className={styles.welcomeBackNico}>Projects️</b>
              <div className={styles.moreIcon}>
                <img
                  className={styles.image1Icon}
                  alt=""
                  src="/image-1@2x.png"
                />
              </div>
            </div>
            <div className={styles.items}>
              <div className={styles.item}>
                <img className={styles.icon2} alt="" src="/icon1.svg" />
                <b className={styles.team}>Team</b>
              </div>
              <div className={styles.item1}>
                <div className={styles.sub}>
                  <div className={styles.items1}>
                    <div className={styles.item2}>
                      <div className={styles.uxResearch}>Ux research</div>
                    </div>
                    <div className={styles.item3}>
                      <div className={styles.uxResearch}>User flow</div>
                    </div>
                    <div className={styles.item4}>
                      <div className={styles.uxResearch}>Design system</div>
                    </div>
                    <button className={styles.item5}>
                      <div className={styles.allProjects3}>
                        All projects (3)
                      </div>
                    </button>
                  </div>
                  <img className={styles.linesIcon} alt="" src="/lines.svg" />
                </div>
                <div className={styles.title1}>
                  <img className={styles.icon3} alt="" src="/icon2.svg" />
                  <b className={styles.team}>Projects</b>
                </div>
              </div>
              <div className={styles.item1}>
                <div className={styles.sub1}>
                  <div className={styles.items2}>
                    <div className={styles.item2}>
                      <div className={styles.uxResearch}>Done (3)</div>
                    </div>
                    <div className={styles.item8}>
                      <div className={styles.uxResearch}>In progress (4)</div>
                    </div>
                    <div className={styles.item9}>
                      <div className={styles.uxResearch}>To do (4)</div>
                    </div>
                    <div className={styles.item10}>
                      <div className={styles.uxResearch}>All tasks (11)</div>
                    </div>
                  </div>
                  <img className={styles.linesIcon} alt="" src="/lines.svg" />
                </div>
                <div className={styles.title1}>
                  <img className={styles.icon3} alt="" src="/icon2.svg" />
                  <b className={styles.team}>Tasks</b>
                </div>
              </div>
              <div className={styles.item}>
                <img className={styles.icon2} alt="" src="/icon1.svg" />
                <b className={styles.team}>Reminders</b>
              </div>
              <div className={styles.item}>
                <img className={styles.icon2} alt="" src="/icon1.svg" />
                <b className={styles.team}>Messengers</b>
              </div>
            </div>
          </div>
          <div className={styles.modeWrapper}>
            <div className={styles.mode}>
              <div className={styles.items3}>
                <div className={styles.item13}>
                  <div className={styles.box} />
                  <div className={styles.content}>
                    <div className={styles.dark}>Dark</div>
                    <img className={styles.icon7} alt="" src="/icon13.svg" />
                  </div>
                </div>
                <div className={styles.item14}>
                  <div className={styles.box1} />
                  <div className={styles.content1}>
                    <div className={styles.dark}>Light</div>
                    <img className={styles.icon8} alt="" src="/icon14.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.kanban}>
          <div className={styles.content2}>
            <b className={styles.welcomeBackNico}>Welcome back, Nico 👋</b>
            <div className={styles.right}>
              <img
                className={styles.profileIcon}
                alt=""
                src="/profile@2x.png"
              />
              <div className={styles.calender}>
                <div className={styles.may2022}>19 May 2022</div>
                <img className={styles.icon9} alt="" src="/icon3.svg" />
              </div>
              <img
                className={styles.notificationsIcon}
                alt=""
                src="/notifications.svg"
              />
              <img className={styles.searchIcon} alt="" src="/search.svg" />
            </div>
          </div>
          <div className={styles.menu}>
            <div className={styles.items4}>
              <div className={styles.item15}>
                <img className={styles.borderIcon} alt="" src="/border.svg" />
                <div className={styles.content3}>
                  <div className={styles.boardView}>Board view</div>
                  <img className={styles.icon10} alt="" src="/icon11.svg" />
                </div>
              </div>
              <div className={styles.item16}>
                <img className={styles.borderIcon1} alt="" />
                <div className={styles.content4}>
                  <div className={styles.addView}>Add view</div>
                  <img className={styles.icon11} alt="" src="/icon6.svg" />
                </div>
              </div>
            </div>
            <div className={styles.right1}>
              <div className={styles.uxResearch}>Filter</div>
              <div className={styles.sort}>Sort</div>
              <img className={styles.moreIcon} alt="" src="/more.svg" />
              <div className={styles.button}>
                <div className={styles.uxResearch}>New template</div>
              </div>
            </div>
          </div>
          <div className={styles.kanbanscontainer}>
            <div className={styles.toDo}>
              <div className={styles.top}>
                <div className={styles.toDo41}>To do (4)</div>
                <div className={styles.add}>
                  <div className={styles.addNewTask}>Add new task</div>
                  <img className={styles.icon12} alt="" src="/icon4.svg" />
                </div>
              </div>
              <div className={styles.tasks1}>
                <div className={styles.task}>
                  <div className={styles.topParent}>
                    <div className={styles.top1}>
                      <div className={styles.title3}>
                        <b className={styles.designNewUi}>
                          Design new ui presentation
                        </b>
                        <div className={styles.dribbbleMarketing}>
                          Dribbble marketing
                        </div>
                      </div>
                      <img
                        className={styles.moreIcon}
                        alt=""
                        src="/more1.svg"
                      />
                    </div>
                    <div className={styles.progress}>
                      <div className={styles.top2}>
                        <div className={styles.title4}>
                          <img
                            className={styles.icon13}
                            alt=""
                            src="/icon5.svg"
                          />
                          <div className={styles.progress1}>Progress</div>
                        </div>
                        <div className={styles.div}>7/10</div>
                      </div>
                      <div className={styles.slider}>
                        <div className={styles.box2} />
                        <div className={styles.fill} />
                      </div>
                    </div>
                    <div className={styles.bottom}>
                      <div className={styles.date}>
                        <div className={styles.uxResearch}>24 Aug 2022</div>
                      </div>
                      <div className={styles.right2}>
                        <div className={styles.attach}>
                          <div className={styles.div1}>2</div>
                          <img
                            className={styles.icon14}
                            alt=""
                            src="/icon7.svg"
                          />
                        </div>
                        <div className={styles.comment}>
                          <div className={styles.div2}>7</div>
                          <img
                            className={styles.icon14}
                            alt=""
                            src="/icon8.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.tasks1}>
                <div className={styles.task}>
                  <div className={styles.topParent}>
                    <div className={styles.top1}>
                      <div className={styles.title3}>
                        <b className={styles.designNewUi}>
                          Design new ui presentation
                        </b>
                        <div className={styles.dribbbleMarketing}>
                          Dribbble marketing
                        </div>
                      </div>
                      <img
                        className={styles.moreIcon}
                        alt=""
                        src="/more2.svg"
                      />
                    </div>
                    <div className={styles.progress}>
                      <div className={styles.top2}>
                        <div className={styles.title4}>
                          <img
                            className={styles.icon13}
                            alt=""
                            src="/icon9.svg"
                          />
                          <div className={styles.progress1}>Progress</div>
                        </div>
                        <div className={styles.div}>7/10</div>
                      </div>
                      <div className={styles.slider}>
                        <div className={styles.box2} />
                        <div className={styles.fill} />
                      </div>
                    </div>
                    <div className={styles.bottom}>
                      <div className={styles.date}>
                        <div className={styles.uxResearch}>24 Aug 2022</div>
                      </div>
                      <div className={styles.right2}>
                        <div className={styles.attach}>
                          <div className={styles.div1}>2</div>
                          <img
                            className={styles.icon14}
                            alt=""
                            src="/icon10.svg"
                          />
                        </div>
                        <div className={styles.comment}>
                          <div className={styles.div2}>7</div>
                          <img
                            className={styles.icon14}
                            alt=""
                            src="/icon12.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.tasks1}>
                <div className={styles.task}>
                  <div className={styles.topParent}>
                    <div className={styles.top1}>
                      <div className={styles.title3}>
                        <b className={styles.designNewUi}>
                          Design new ui presentation
                        </b>
                        <div className={styles.dribbbleMarketing}>
                          Dribbble marketing
                        </div>
                      </div>
                      <img
                        className={styles.moreIcon}
                        alt=""
                        src="/more3.svg"
                      />
                    </div>
                    <div className={styles.progress}>
                      <div className={styles.top2}>
                        <div className={styles.title4}>
                          <img
                            className={styles.icon13}
                            alt=""
                            src="/icon15.svg"
                          />
                          <div className={styles.progress1}>Progress</div>
                        </div>
                        <div className={styles.div}>7/10</div>
                      </div>
                      <div className={styles.slider}>
                        <div className={styles.box2} />
                        <div className={styles.fill} />
                      </div>
                    </div>
                    <div className={styles.bottom}>
                      <div className={styles.date}>
                        <div className={styles.uxResearch}>24 Aug 2022</div>
                      </div>
                      <div className={styles.right2}>
                        <div className={styles.attach}>
                          <div className={styles.div1}>2</div>
                          <img
                            className={styles.icon14}
                            alt=""
                            src="/icon16.svg"
                          />
                        </div>
                        <div className={styles.comment}>
                          <div className={styles.div2}>7</div>
                          <img
                            className={styles.icon14}
                            alt=""
                            src="/icon17.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.toDo}>
              <div className={styles.top}>
                <div className={styles.toDo41}>To do (4)</div>
                <div className={styles.add}>
                  <div className={styles.addNewTask}>Add new task</div>
                  <img className={styles.icon12} alt="" src="/icon4.svg" />
                </div>
              </div>
              <div className={styles.tasks1}>
                <div className={styles.task}>
                  <div className={styles.topParent}>
                    <div className={styles.top1}>
                      <div className={styles.title3}>
                        <b className={styles.designNewUi}>
                          Design new ui presentation
                        </b>
                        <div className={styles.dribbbleMarketing}>
                          Dribbble marketing
                        </div>
                      </div>
                      <img
                        className={styles.moreIcon}
                        alt=""
                        src="/more1.svg"
                      />
                    </div>
                    <div className={styles.progress}>
                      <div className={styles.top2}>
                        <div className={styles.title4}>
                          <img
                            className={styles.icon13}
                            alt=""
                            src="/icon5.svg"
                          />
                          <div className={styles.progress1}>Progress</div>
                        </div>
                        <div className={styles.div}>7/10</div>
                      </div>
                      <div className={styles.slider}>
                        <div className={styles.box2} />
                        <div className={styles.fill} />
                      </div>
                    </div>
                    <div className={styles.bottom}>
                      <div className={styles.date}>
                        <div className={styles.uxResearch}>24 Aug 2022</div>
                      </div>
                      <div className={styles.right2}>
                        <div className={styles.attach}>
                          <div className={styles.div1}>2</div>
                          <img
                            className={styles.icon14}
                            alt=""
                            src="/icon7.svg"
                          />
                        </div>
                        <div className={styles.comment}>
                          <div className={styles.div2}>7</div>
                          <img
                            className={styles.icon14}
                            alt=""
                            src="/icon8.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.tasks1}>
                <div className={styles.task}>
                  <div className={styles.topParent}>
                    <div className={styles.top1}>
                      <div className={styles.title3}>
                        <b className={styles.designNewUi}>
                          Design new ui presentation
                        </b>
                        <div className={styles.dribbbleMarketing}>
                          Dribbble marketing
                        </div>
                      </div>
                      <img
                        className={styles.moreIcon}
                        alt=""
                        src="/more2.svg"
                      />
                    </div>
                    <div className={styles.progress}>
                      <div className={styles.top2}>
                        <div className={styles.title4}>
                          <img
                            className={styles.icon13}
                            alt=""
                            src="/icon9.svg"
                          />
                          <div className={styles.progress1}>Progress</div>
                        </div>
                        <div className={styles.div}>7/10</div>
                      </div>
                      <div className={styles.slider}>
                        <div className={styles.box2} />
                        <div className={styles.fill} />
                      </div>
                    </div>
                    <div className={styles.bottom}>
                      <div className={styles.date}>
                        <div className={styles.uxResearch}>24 Aug 2022</div>
                      </div>
                      <div className={styles.right2}>
                        <div className={styles.attach}>
                          <div className={styles.div1}>2</div>
                          <img
                            className={styles.icon14}
                            alt=""
                            src="/icon10.svg"
                          />
                        </div>
                        <div className={styles.comment}>
                          <div className={styles.div2}>7</div>
                          <img
                            className={styles.icon14}
                            alt=""
                            src="/icon12.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.tasks1}>
                <div className={styles.task}>
                  <div className={styles.topParent}>
                    <div className={styles.top1}>
                      <div className={styles.title3}>
                        <b className={styles.designNewUi}>
                          Design new ui presentation
                        </b>
                        <div className={styles.dribbbleMarketing}>
                          Dribbble marketing
                        </div>
                      </div>
                      <img
                        className={styles.moreIcon}
                        alt=""
                        src="/more3.svg"
                      />
                    </div>
                    <div className={styles.progress}>
                      <div className={styles.top2}>
                        <div className={styles.title4}>
                          <img
                            className={styles.icon13}
                            alt=""
                            src="/icon15.svg"
                          />
                          <div className={styles.progress1}>Progress</div>
                        </div>
                        <div className={styles.div}>7/10</div>
                      </div>
                      <div className={styles.slider}>
                        <div className={styles.box2} />
                        <div className={styles.fill} />
                      </div>
                    </div>
                    <div className={styles.bottom}>
                      <div className={styles.date}>
                        <div className={styles.uxResearch}>24 Aug 2022</div>
                      </div>
                      <div className={styles.right2}>
                        <div className={styles.attach}>
                          <div className={styles.div1}>2</div>
                          <img
                            className={styles.icon14}
                            alt=""
                            src="/icon16.svg"
                          />
                        </div>
                        <div className={styles.comment}>
                          <div className={styles.div2}>7</div>
                          <img
                            className={styles.icon14}
                            alt=""
                            src="/icon17.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.toDo}>
              <div className={styles.top}>
                <div className={styles.toDo41}>To do (4)</div>
                <div className={styles.add}>
                  <div className={styles.addNewTask}>Add new task</div>
                  <img className={styles.icon12} alt="" src="/icon4.svg" />
                </div>
              </div>
              <div className={styles.tasks1}>
                <div className={styles.task}>
                  <div className={styles.topParent}>
                    <div className={styles.top1}>
                      <div className={styles.title3}>
                        <b className={styles.designNewUi}>
                          Design new ui presentation
                        </b>
                        <div className={styles.dribbbleMarketing}>
                          Dribbble marketing
                        </div>
                      </div>
                      <img
                        className={styles.moreIcon}
                        alt=""
                        src="/more1.svg"
                      />
                    </div>
                    <div className={styles.progress}>
                      <div className={styles.top2}>
                        <div className={styles.title4}>
                          <img
                            className={styles.icon13}
                            alt=""
                            src="/icon18.svg"
                          />
                          <div className={styles.progress1}>Progress</div>
                        </div>
                        <div className={styles.div}>7/10</div>
                      </div>
                      <div className={styles.slider}>
                        <div className={styles.box2} />
                        <div className={styles.fill} />
                      </div>
                    </div>
                    <div className={styles.bottom}>
                      <div className={styles.date}>
                        <div className={styles.uxResearch}>24 Aug 2022</div>
                      </div>
                      <div className={styles.right2}>
                        <div className={styles.attach}>
                          <div className={styles.div1}>2</div>
                          <img
                            className={styles.icon14}
                            alt=""
                            src="/icon7.svg"
                          />
                        </div>
                        <div className={styles.comment}>
                          <div className={styles.div2}>7</div>
                          <img
                            className={styles.icon14}
                            alt=""
                            src="/icon8.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.tasks1}>
                <div className={styles.task}>
                  <div className={styles.topParent}>
                    <div className={styles.top1}>
                      <div className={styles.title3}>
                        <b className={styles.designNewUi}>
                          Design new ui presentation
                        </b>
                        <div className={styles.dribbbleMarketing}>
                          Dribbble marketing
                        </div>
                      </div>
                      <img
                        className={styles.moreIcon}
                        alt=""
                        src="/more2.svg"
                      />
                    </div>
                    <div className={styles.progress}>
                      <div className={styles.top2}>
                        <div className={styles.title4}>
                          <img
                            className={styles.icon13}
                            alt=""
                            src="/icon19.svg"
                          />
                          <div className={styles.progress1}>Progress</div>
                        </div>
                        <div className={styles.div}>7/10</div>
                      </div>
                      <div className={styles.slider}>
                        <div className={styles.box2} />
                        <div className={styles.fill} />
                      </div>
                    </div>
                    <div className={styles.bottom}>
                      <div className={styles.date}>
                        <div className={styles.uxResearch}>24 Aug 2022</div>
                      </div>
                      <div className={styles.right2}>
                        <div className={styles.attach}>
                          <div className={styles.div1}>2</div>
                          <img
                            className={styles.icon14}
                            alt=""
                            src="/icon10.svg"
                          />
                        </div>
                        <div className={styles.comment}>
                          <div className={styles.div2}>7</div>
                          <img
                            className={styles.icon14}
                            alt=""
                            src="/icon12.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.tasks1}>
                <div className={styles.task}>
                  <div className={styles.topParent}>
                    <div className={styles.top1}>
                      <div className={styles.title3}>
                        <b className={styles.designNewUi}>
                          Design new ui presentation
                        </b>
                        <div className={styles.dribbbleMarketing}>
                          Dribbble marketing
                        </div>
                      </div>
                      <img
                        className={styles.moreIcon}
                        alt=""
                        src="/more3.svg"
                      />
                    </div>
                    <div className={styles.progress}>
                      <div className={styles.top2}>
                        <div className={styles.title4}>
                          <img
                            className={styles.icon13}
                            alt=""
                            src="/icon20.svg"
                          />
                          <div className={styles.progress1}>Progress</div>
                        </div>
                        <div className={styles.div}>7/10</div>
                      </div>
                      <div className={styles.slider}>
                        <div className={styles.box2} />
                        <div className={styles.fill} />
                      </div>
                    </div>
                    <div className={styles.bottom}>
                      <div className={styles.date}>
                        <div className={styles.uxResearch}>24 Aug 2022</div>
                      </div>
                      <div className={styles.right2}>
                        <div className={styles.attach}>
                          <div className={styles.div1}>2</div>
                          <img
                            className={styles.icon14}
                            alt=""
                            src="/icon16.svg"
                          />
                        </div>
                        <div className={styles.comment}>
                          <div className={styles.div2}>7</div>
                          <img
                            className={styles.icon14}
                            alt=""
                            src="/icon17.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.toDo}>
              <div className={styles.top}>
                <div className={styles.toDo41}>To do (4)</div>
                <div className={styles.add}>
                  <div className={styles.addNewTask}>Add new task</div>
                  <img className={styles.icon12} alt="" src="/icon4.svg" />
                </div>
              </div>
              <div className={styles.tasks1}>
                <div className={styles.task}>
                  <div className={styles.topParent}>
                    <div className={styles.top1}>
                      <div className={styles.title3}>
                        <b className={styles.designNewUi}>
                          Design new ui presentation
                        </b>
                        <div className={styles.dribbbleMarketing}>
                          Dribbble marketing
                        </div>
                      </div>
                      <img
                        className={styles.moreIcon}
                        alt=""
                        src="/more1.svg"
                      />
                    </div>
                    <div className={styles.progress}>
                      <div className={styles.top2}>
                        <div className={styles.title4}>
                          <img
                            className={styles.icon13}
                            alt=""
                            src="/icon18.svg"
                          />
                          <div className={styles.progress1}>Progress</div>
                        </div>
                        <div className={styles.div}>7/10</div>
                      </div>
                      <div className={styles.slider}>
                        <div className={styles.box2} />
                        <div className={styles.fill} />
                      </div>
                    </div>
                    <div className={styles.bottom}>
                      <div className={styles.date}>
                        <div className={styles.uxResearch}>24 Aug 2022</div>
                      </div>
                      <div className={styles.right2}>
                        <div className={styles.attach}>
                          <div className={styles.div1}>2</div>
                          <img
                            className={styles.icon14}
                            alt=""
                            src="/icon21.svg"
                          />
                        </div>
                        <div className={styles.comment}>
                          <div className={styles.div2}>7</div>
                          <img
                            className={styles.icon14}
                            alt=""
                            src="/icon8.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.tasks1}>
                <div className={styles.task}>
                  <div className={styles.topParent}>
                    <div className={styles.top1}>
                      <div className={styles.title3}>
                        <b className={styles.designNewUi}>
                          Design new ui presentation
                        </b>
                        <div className={styles.dribbbleMarketing}>
                          Dribbble marketing
                        </div>
                      </div>
                      <img
                        className={styles.moreIcon}
                        alt=""
                        src="/more2.svg"
                      />
                    </div>
                    <div className={styles.progress}>
                      <div className={styles.top2}>
                        <div className={styles.title4}>
                          <img
                            className={styles.icon13}
                            alt=""
                            src="/icon19.svg"
                          />
                          <div className={styles.progress1}>Progress</div>
                        </div>
                        <div className={styles.div}>7/10</div>
                      </div>
                      <div className={styles.slider}>
                        <div className={styles.box2} />
                        <div className={styles.fill} />
                      </div>
                    </div>
                    <div className={styles.bottom}>
                      <div className={styles.date}>
                        <div className={styles.uxResearch}>24 Aug 2022</div>
                      </div>
                      <div className={styles.right2}>
                        <div className={styles.attach}>
                          <div className={styles.div1}>2</div>
                          <img
                            className={styles.icon14}
                            alt=""
                            src="/icon22.svg"
                          />
                        </div>
                        <div className={styles.comment}>
                          <div className={styles.div2}>7</div>
                          <img
                            className={styles.icon14}
                            alt=""
                            src="/icon12.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.tasks1}>
                <div className={styles.task}>
                  <div className={styles.topParent}>
                    <div className={styles.top1}>
                      <div className={styles.title3}>
                        <b className={styles.designNewUi}>
                          Design new ui presentation
                        </b>
                        <div className={styles.dribbbleMarketing}>
                          Dribbble marketing
                        </div>
                      </div>
                      <img
                        className={styles.moreIcon}
                        alt=""
                        src="/more3.svg"
                      />
                    </div>
                    <div className={styles.progress}>
                      <div className={styles.top2}>
                        <div className={styles.title4}>
                          <img
                            className={styles.icon13}
                            alt=""
                            src="/icon20.svg"
                          />
                          <div className={styles.progress1}>Progress</div>
                        </div>
                        <div className={styles.div}>7/10</div>
                      </div>
                      <div className={styles.slider}>
                        <div className={styles.box2} />
                        <div className={styles.fill} />
                      </div>
                    </div>
                    <div className={styles.bottom}>
                      <div className={styles.date}>
                        <div className={styles.uxResearch}>24 Aug 2022</div>
                      </div>
                      <div className={styles.right2}>
                        <div className={styles.attach}>
                          <div className={styles.div1}>2</div>
                          <img
                            className={styles.icon14}
                            alt=""
                            src="/icon23.svg"
                          />
                        </div>
                        <div className={styles.comment}>
                          <div className={styles.div2}>7</div>
                          <img
                            className={styles.icon14}
                            alt=""
                            src="/icon17.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.toDo}>
              <div className={styles.top}>
                <div className={styles.toDo41}>To do (4)</div>
                <div className={styles.add}>
                  <div className={styles.addNewTask}>Add new task</div>
                  <img className={styles.icon12} alt="" src="/icon4.svg" />
                </div>
              </div>
              <div className={styles.tasks1}>
                <div className={styles.task}>
                  <div className={styles.topParent}>
                    <div className={styles.top1}>
                      <div className={styles.title3}>
                        <b className={styles.designNewUi}>
                          Design new ui presentation
                        </b>
                        <div className={styles.dribbbleMarketing}>
                          Dribbble marketing
                        </div>
                      </div>
                      <img
                        className={styles.moreIcon}
                        alt=""
                        src="/more1.svg"
                      />
                    </div>
                    <div className={styles.progress}>
                      <div className={styles.top2}>
                        <div className={styles.title4}>
                          <img
                            className={styles.icon13}
                            alt=""
                            src="/icon18.svg"
                          />
                          <div className={styles.progress1}>Progress</div>
                        </div>
                        <div className={styles.div}>7/10</div>
                      </div>
                      <div className={styles.slider}>
                        <div className={styles.box2} />
                        <div className={styles.fill} />
                      </div>
                    </div>
                    <div className={styles.bottom}>
                      <div className={styles.date}>
                        <div className={styles.uxResearch}>24 Aug 2022</div>
                      </div>
                      <div className={styles.right2}>
                        <div className={styles.attach}>
                          <div className={styles.div1}>2</div>
                          <img
                            className={styles.icon14}
                            alt=""
                            src="/icon21.svg"
                          />
                        </div>
                        <div className={styles.comment}>
                          <div className={styles.div2}>7</div>
                          <img
                            className={styles.icon14}
                            alt=""
                            src="/icon8.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.tasks1}>
                <div className={styles.task}>
                  <div className={styles.topParent}>
                    <div className={styles.top1}>
                      <div className={styles.title3}>
                        <b className={styles.designNewUi}>
                          Design new ui presentation
                        </b>
                        <div className={styles.dribbbleMarketing}>
                          Dribbble marketing
                        </div>
                      </div>
                      <img
                        className={styles.moreIcon}
                        alt=""
                        src="/more2.svg"
                      />
                    </div>
                    <div className={styles.progress}>
                      <div className={styles.top2}>
                        <div className={styles.title4}>
                          <img
                            className={styles.icon13}
                            alt=""
                            src="/icon19.svg"
                          />
                          <div className={styles.progress1}>Progress</div>
                        </div>
                        <div className={styles.div}>7/10</div>
                      </div>
                      <div className={styles.slider}>
                        <div className={styles.box2} />
                        <div className={styles.fill} />
                      </div>
                    </div>
                    <div className={styles.bottom}>
                      <div className={styles.date}>
                        <div className={styles.uxResearch}>24 Aug 2022</div>
                      </div>
                      <div className={styles.right2}>
                        <div className={styles.attach}>
                          <div className={styles.div1}>2</div>
                          <img
                            className={styles.icon14}
                            alt=""
                            src="/icon22.svg"
                          />
                        </div>
                        <div className={styles.comment}>
                          <div className={styles.div2}>7</div>
                          <img
                            className={styles.icon14}
                            alt=""
                            src="/icon12.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.tasks1}>
                <div className={styles.task}>
                  <div className={styles.topParent}>
                    <div className={styles.top1}>
                      <div className={styles.title3}>
                        <b className={styles.designNewUi}>
                          Design new ui presentation
                        </b>
                        <div className={styles.dribbbleMarketing}>
                          Dribbble marketing
                        </div>
                      </div>
                      <img
                        className={styles.moreIcon}
                        alt=""
                        src="/more3.svg"
                      />
                    </div>
                    <div className={styles.progress}>
                      <div className={styles.top2}>
                        <div className={styles.title4}>
                          <img
                            className={styles.icon13}
                            alt=""
                            src="/icon20.svg"
                          />
                          <div className={styles.progress1}>Progress</div>
                        </div>
                        <div className={styles.div}>7/10</div>
                      </div>
                      <div className={styles.slider}>
                        <div className={styles.box2} />
                        <div className={styles.fill} />
                      </div>
                    </div>
                    <div className={styles.bottom}>
                      <div className={styles.date}>
                        <div className={styles.uxResearch}>24 Aug 2022</div>
                      </div>
                      <div className={styles.right2}>
                        <div className={styles.attach}>
                          <div className={styles.div1}>2</div>
                          <img
                            className={styles.icon14}
                            alt=""
                            src="/icon23.svg"
                          />
                        </div>
                        <div className={styles.comment}>
                          <div className={styles.div2}>7</div>
                          <img
                            className={styles.icon14}
                            alt=""
                            src="/icon17.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.toDo}>
              <div className={styles.top}>
                <div className={styles.toDo41}>To do (4)</div>
                <div className={styles.add}>
                  <div className={styles.addNewTask}>Add new task</div>
                  <img className={styles.icon12} alt="" src="/icon4.svg" />
                </div>
              </div>
              <div className={styles.tasks1}>
                <div className={styles.task}>
                  <div className={styles.topParent}>
                    <div className={styles.top1}>
                      <div className={styles.title3}>
                        <b className={styles.designNewUi}>
                          Design new ui presentation
                        </b>
                        <div className={styles.dribbbleMarketing}>
                          Dribbble marketing
                        </div>
                      </div>
                      <img
                        className={styles.moreIcon}
                        alt=""
                        src="/more1.svg"
                      />
                    </div>
                    <div className={styles.progress}>
                      <div className={styles.top2}>
                        <div className={styles.title4}>
                          <img
                            className={styles.icon13}
                            alt=""
                            src="/icon18.svg"
                          />
                          <div className={styles.progress1}>Progress</div>
                        </div>
                        <div className={styles.div}>7/10</div>
                      </div>
                      <div className={styles.slider}>
                        <div className={styles.box2} />
                        <div className={styles.fill} />
                      </div>
                    </div>
                    <div className={styles.bottom}>
                      <div className={styles.date}>
                        <div className={styles.uxResearch}>24 Aug 2022</div>
                      </div>
                      <div className={styles.right2}>
                        <div className={styles.attach}>
                          <div className={styles.div1}>2</div>
                          <img
                            className={styles.icon14}
                            alt=""
                            src="/icon21.svg"
                          />
                        </div>
                        <div className={styles.comment}>
                          <div className={styles.div2}>7</div>
                          <img
                            className={styles.icon14}
                            alt=""
                            src="/icon8.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.tasks1}>
                <div className={styles.task}>
                  <div className={styles.topParent}>
                    <div className={styles.top1}>
                      <div className={styles.title3}>
                        <b className={styles.designNewUi}>
                          Design new ui presentation
                        </b>
                        <div className={styles.dribbbleMarketing}>
                          Dribbble marketing
                        </div>
                      </div>
                      <img
                        className={styles.moreIcon}
                        alt=""
                        src="/more2.svg"
                      />
                    </div>
                    <div className={styles.progress}>
                      <div className={styles.top2}>
                        <div className={styles.title4}>
                          <img
                            className={styles.icon13}
                            alt=""
                            src="/icon19.svg"
                          />
                          <div className={styles.progress1}>Progress</div>
                        </div>
                        <div className={styles.div}>7/10</div>
                      </div>
                      <div className={styles.slider}>
                        <div className={styles.box2} />
                        <div className={styles.fill} />
                      </div>
                    </div>
                    <div className={styles.bottom}>
                      <div className={styles.date}>
                        <div className={styles.uxResearch}>24 Aug 2022</div>
                      </div>
                      <div className={styles.right2}>
                        <div className={styles.attach}>
                          <div className={styles.div1}>2</div>
                          <img
                            className={styles.icon14}
                            alt=""
                            src="/icon22.svg"
                          />
                        </div>
                        <div className={styles.comment}>
                          <div className={styles.div2}>7</div>
                          <img
                            className={styles.icon14}
                            alt=""
                            src="/icon12.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.tasks1}>
                <div className={styles.task}>
                  <div className={styles.topParent}>
                    <div className={styles.top1}>
                      <div className={styles.title3}>
                        <b className={styles.designNewUi}>
                          Design new ui presentation
                        </b>
                        <div className={styles.dribbbleMarketing}>
                          Dribbble marketing
                        </div>
                      </div>
                      <img
                        className={styles.moreIcon}
                        alt=""
                        src="/more3.svg"
                      />
                    </div>
                    <div className={styles.progress}>
                      <div className={styles.top2}>
                        <div className={styles.title4}>
                          <img
                            className={styles.icon13}
                            alt=""
                            src="/icon20.svg"
                          />
                          <div className={styles.progress1}>Progress</div>
                        </div>
                        <div className={styles.div}>7/10</div>
                      </div>
                      <div className={styles.slider}>
                        <div className={styles.box2} />
                        <div className={styles.fill} />
                      </div>
                    </div>
                    <div className={styles.bottom}>
                      <div className={styles.date}>
                        <div className={styles.uxResearch}>24 Aug 2022</div>
                      </div>
                      <div className={styles.right2}>
                        <div className={styles.attach}>
                          <div className={styles.div1}>2</div>
                          <img
                            className={styles.icon14}
                            alt=""
                            src="/icon23.svg"
                          />
                        </div>
                        <div className={styles.comment}>
                          <div className={styles.div2}>7</div>
                          <img
                            className={styles.icon14}
                            alt=""
                            src="/icon17.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoDashboard;
