import React, { useEffect, useState } from 'react'
import commentData from './components/comments'
import commentsTwo from './components/secondComment'
import './index.css'
import Navigation from './components/Navigation'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'
import Section5 from './components/Section5'
import Section6 from './components/Section6'
import Section7 from './components/Section7'
import Section8 from './components/Section8'
import Section9 from './components/Section9'
import Section10 from './components/Section10'
import Section11 from './components/Section11'
import Section12 from './components/Section12'
import Section13 from './components/Section13'
import Section14 from './components/Section14'
import Section15 from './components/Section15'
import Section16 from './components/Section16'
import Section17 from './components/Section17'
import Section18 from './components/Section18'
import Section19 from './components/Section19'
import Section20 from './components/Section20'
import Section21 from './components/Section21'
import Section22 from './components/Section22'
import Section23 from './components/Section23'
import Section24 from './components/Section24'
import Section25 from './components/Section25'

export default function App() {
    const [page, setPage] = useState("Home")
    const getPageName = (values) => {
        setPage(values)
    }
    const getPageNameFromSection1 = (values) => {
        setPage(values)
    }
    const getPageNameFromSection4Btn1 = (values) => {
        setPage(values)
    }
    const getPageNameFromSection4Btn3 = (values) => {
        setPage(values)
    }
    const getPageNameFromOutsourceGoogleAds = (value) => {
        setPage(value)
    }
    const getPageNameFromGoogleAdsAudit = (value) => {
        setPage(value)
    }
    const getPageNameFromGoogleAdsCoaching = (value) => {
        setPage(value)
    }
    const getPageNameFromAboutMe = (value) => {
        setPage(value)
    }
    const getPageNameFromContact = (value) => {
        setPage(value)
    }
    const getPageNameFromSection5Btn = (value) => {
        setPage(value)
    }
    const getPageNameFromSection7Btn = (value) => {
        setPage(value)
    }
    const getPageNameFromSection12Btn = (value) => {
        setPage(value)
    }
    const getPageNameFromNavigationDropdown2nd = (value) => {
        setPage(value)
    }
    const getPageNameFromNavigationDropdown3rd = (value) => {
        setPage(value)
    }
    const getPageNameFromNavigationDropdown4th = (value) => {
        setPage(value)
    }
    const getPageNameFromSection16Btn = (value) => {
        setPage(value)
    }

    const renderPage = () => {
        switch (page) {
            case 'Home':
                return (
                    <div>
                        <Navigation getPageName={getPageName} getPageNameFromNavigationDropdown2nd={getPageNameFromNavigationDropdown2nd} getPageNameFromNavigationDropdown3rd={getPageNameFromNavigationDropdown3rd} getPageNameFromNavigationDropdown4th={getPageNameFromNavigationDropdown4th}/>
                        <div className='section-1'>
                            <Section1 getPageNameFromSection1={getPageNameFromSection1} />
                        </div>
                        <div className='section-2'>
                            <Section2 header="I work with the best companies" />
                        </div>
                        <div className='section-3'>
                            <Section3 />
                        </div>
                        <div className='section-4'>
                            <Section4 getPageNameFromSection4Btn1={getPageNameFromSection4Btn1} getPageNameFromSection4Btn3={getPageNameFromSection4Btn3}/>
                        </div>
                        <div className='section-5'>
                            <Section5 getPageNameFromSection5Btn={getPageNameFromSection5Btn}/>
                        </div>

                        <div>
                            <h1 className='section6-heading'>What people say about me</h1>
                            <div className='section-6'>
                                {commentData.map((elements) => {
                                    return (
                                        <div key={elements.id}>
                                            <Section6 key={elements.id} name={elements.name} icon={elements.icon} image={elements.image} comments={elements.comments} position={elements.position} link={elements.link} />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className='section-7'>
                            <Section7 getPageNameFromSection7Btn={getPageNameFromSection7Btn}/>
                        </div>
                        <div className='section-8'>
                            <Section8 getPageNameFromOutsourceGoogleAds={getPageNameFromOutsourceGoogleAds} getPageNameFromGoogleAdsAudit={getPageNameFromGoogleAdsAudit} getPageNameFromGoogleAdsCoaching={getPageNameFromGoogleAdsCoaching} getPageNameFromAboutMe={getPageNameFromAboutMe} getPageNameFromContact={getPageNameFromContact}/>
                        </div>
                    </div>
                )
            case "Section1 button":
                return (
                    <div>
                        <Navigation getPageName={getPageName} getPageNameFromNavigationDropdown2nd={getPageNameFromNavigationDropdown2nd} getPageNameFromNavigationDropdown3rd={getPageNameFromNavigationDropdown3rd} getPageNameFromNavigationDropdown4th={getPageNameFromNavigationDropdown4th}/>
                        <div className='section-16'>
                            <Section16 getPageNameFromSection16Btn={getPageNameFromSection16Btn}/>
                        </div><br /><br /><br /><br /><br />
                        <div className='section-2'>
                            <Section2 header="I work with the best companies" />
                        </div>
                        <div className='section-3'>
                            <Section3 />
                        </div>
                        <div className='section-17'>
                            <Section17 />
                        </div>
                        <h1 style={{color : '#2F3349', textAlign: "center" }}>What people say about me</h1>
                        <div className='section-6' style={{ backgroundColor: '#E0F1F1' }}>
                            {
                                commentData.map((element) => {
                                    return (
                                        <div key={element.id}>
                                            <Section6 icon={element.icon} comments={element.comments} image={element.image} name={element.name} position={element.position} link={element.link}/>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <br /><br /><br />
                        <div className='section-13'>
                            <Section13 heading="Why me?" />
                        </div>
                        <div style={{clear : 'both'}}>

                        </div>
                        <div className='section-7'>
                            <Section7 getPageNameFromSection7Btn={getPageNameFromSection7Btn}/>
                        </div>
                        <div className='section-8'>
                            <Section8 getPageNameFromOutsourceGoogleAds={getPageNameFromOutsourceGoogleAds} getPageNameFromGoogleAdsAudit={getPageNameFromGoogleAdsAudit} getPageNameFromGoogleAdsCoaching={getPageNameFromGoogleAdsCoaching} getPageNameFromAboutMe={getPageNameFromAboutMe}  getPageNameFromContact={getPageNameFromContact}/>
                        </div>
                    </div>
                )
            case "Section4 spar" :
                return(
                    <div>
                        <Navigation getPageName={getPageName} getPageNameFromNavigationDropdown4th={getPageNameFromNavigationDropdown4th} getPageNameFromNavigationDropdown2nd={getPageNameFromNavigationDropdown2nd} getPageNameFromNavigationDropdown3rd={getPageNameFromNavigationDropdown3rd}/>
                        <div className='section-18'>
                            <Section18 />
                        </div><br /><br /><br />
                        <div className='section-2'>
                            <Section2 header="I work with the best compenies"/>
                        </div>
                        <div className="section-19">
                            <Section19 />
                        </div>
                        <div className='section-3'>
                            <Section3 />
                        </div>
                        <br /><br /><br /><br /><br />
                        <div>
                            <h1 style={{color : '#2F3349', textAlign : 'center'}}>What people say about me</h1>
                            <div className='section-6'>
                                {commentsTwo.map((element) => {
                                    return(
                                        <div key={element.id}>
                                            <Section6 icon={element.icon} comments={element.comment} image={element.image} name={element.name} position={element.position} link={element.link}/>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div style={{backgroundColor : '#e0f1f1', width : '100%', padding : '80px 0', display : 'flex', alignItems: 'center', flexDirection : 'column'}}>
                            <h1 style={{color : '#2f3349'}}>Schedule a video call right away</h1>
                            <div style={{height : "150px"}}>

                            </div>
                            <div className='section-20'>
                                <Section20 />
                            </div>
                            <div style={{marginTop : '300px'}}>
                                <div className='section-21'>
                                    <Section21 />
                                </div>
                            </div>
                        </div>
                        <div className='section-22'>
                            <Section22 />
                        </div>
                        <div className='section-23'>
                            <Section23 />
                        </div>
                        <div className='section-8'>
                            <Section8 getPageNameFromOutsourceGoogleAds={getPageNameFromOutsourceGoogleAds} getPageNameFromGoogleAdsAudit={getPageNameFromGoogleAdsAudit} getPageNameFromGoogleAdsCoaching={getPageNameFromGoogleAdsCoaching} getPageNameFromAboutMe={getPageNameFromAboutMe} getPageNameFromContact={getPageNameFromContact}/>
                        </div>
                    </div>
                )

            case "Google Ads audit" :
                return(
                    <div>
                        <Navigation getPageName={getPageName} getPageNameFromNavigationDropdown4th={getPageNameFromNavigationDropdown4th} getPageNameFromNavigationDropdown2nd={getPageNameFromNavigationDropdown2nd} getPageNameFromNavigationDropdown3rd={getPageNameFromNavigationDropdown3rd}/>
                        <div className='section-24'>
                            <Section24 />
                        </div><br /><br /><br />
                        <div className='section-2'>
                            <Section2 header="I work with the best companies"/>
                        </div>
                        <div className='section-3'>
                            <Section3 />
                        </div>
                        <div className='section-17'>
                            <Section17 />
                        </div>
                        <div className='section-25'>
                            <Section25 />
                        </div>
                        <div className='section-8'>
                            <Section8 getPageNameFromOutsourceGoogleAds={getPageNameFromOutsourceGoogleAds} getPageNameFromGoogleAdsAudit={getPageNameFromGoogleAdsAudit} getPageNameFromGoogleAdsCoaching={getPageNameFromGoogleAdsCoaching} getPageNameFromAboutMe={getPageNameFromAboutMe} getPageNameFromContact={getPageNameFromContact}/>
                        </div>
                    </div>
                )
            case "About Me":
                return (
                    <div>
                        <Navigation getPageName={getPageName} getPageNameFromNavigationDropdown4th={getPageNameFromNavigationDropdown4th} getPageNameFromNavigationDropdown2nd={getPageNameFromNavigationDropdown2nd} getPageNameFromNavigationDropdown3rd={getPageNameFromNavigationDropdown3rd}/>
                        <div className='section-11'>
                            <Section11 />
                        </div>
                        <div className='section-12'>
                            <Section12 getPageNameFromSection12Btn={getPageNameFromSection12Btn}/>
                        </div>
                        <div className='reused-comments1'>
                            <div className='section-6 bg-light-blue'>
                                {commentData.map((elements) => {
                                    return (
                                        <div key={elements.id}>
                                            <Section6 key={elements.id} name={elements.name} icon={elements.icon} image={elements.image} comments={elements.comments} position={elements.position} link={elements.link}/>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className='reused-brand1'>
                            <Section2 header="They preceded you" />
                        </div>
                        <div className='section-6'>
                            {commentsTwo.map((element) => {
                                return (
                                    <div key={element.id}>
                                        <Section6 icon={element.icon} comments={element.comment} image={element.image} name={element.name} position={element.position} link={element.link}/>
                                    </div>
                                )
                            })}
                        </div>
                        <div className='section-13'>
                            <Section13 heading="Why you want to work with me:"/>
                        </div>
                        <div style={{ clear: 'both' }}>

                        </div>
                        <div className='section-7'>
                            <Section7 getPageNameFromSection7Btn={getPageNameFromSection7Btn}/>
                        </div>
                        <div className='section-8'>
                            <Section8 getPageNameFromOutsourceGoogleAds={getPageNameFromOutsourceGoogleAds} getPageNameFromGoogleAdsAudit={getPageNameFromGoogleAdsAudit} getPageNameFromGoogleAdsCoaching={getPageNameFromGoogleAdsCoaching} getPageNameFromAboutMe={getPageNameFromAboutMe} getPageNameFromContact={getPageNameFromContact}/>
                        </div>
                    </div>
                )

            case "Contact":
                return (
                    <div>
                        <Navigation getPageName={getPageName} getPageNameFromNavigationDropdown4th={getPageNameFromNavigationDropdown4th} getPageNameFromNavigationDropdown2nd={getPageNameFromNavigationDropdown2nd} getPageNameFromNavigationDropdown3rd={getPageNameFromNavigationDropdown3rd}/>
                        <div className='section-14'>
                            <Section14 />
                        </div>
                        <div className='section-15'>
                            <Section15 />
                        </div><br />
                        <div className='section-8'>
                            <Section8 getPageNameFromOutsourceGoogleAds={getPageNameFromOutsourceGoogleAds} getPageNameFromGoogleAdsAudit={getPageNameFromGoogleAdsAudit} getPageNameFromGoogleAdsCoaching={getPageNameFromGoogleAdsCoaching} getPageNameFromAboutMe={getPageNameFromAboutMe} getPageNameFromContact={getPageNameFromContact}/>
                        </div>
                    </div>
                )

            case "Google Ads Recources":
                return (
                    <div>
                        <Navigation getPageName={getPageName} getPageNameFromNavigationDropdown4th={getPageNameFromNavigationDropdown4th} getPageNameFromNavigationDropdown2nd={getPageNameFromNavigationDropdown2nd} getPageNameFromNavigationDropdown3rd={getPageNameFromNavigationDropdown3rd}/>
                        <div className='section-9'>
                            <Section9 />
                        </div>
                        <div className='section-10'>
                            <Section10 />
                        </div>
                        <br /><br /><br />
                        <div className='section-8'>
                            <Section8 getPageNameFromOutsourceGoogleAds={getPageNameFromOutsourceGoogleAds} getPageNameFromGoogleAdsAudit={getPageNameFromGoogleAdsAudit} getPageNameFromGoogleAdsCoaching={getPageNameFromGoogleAdsCoaching} getPageNameFromAboutMe={getPageNameFromAboutMe} getPageNameFromContact={getPageNameFromContact}/>
                        </div>
                    </div>
                )

            default:
                return (
                    <div>
                        <Navigation getPageName={getPageName} getPageNameFromNavigationDropdown4th={getPageNameFromNavigationDropdown4th} getPageNameFromNavigationDropdown2nd={getPageNameFromNavigationDropdown2nd} getPageNameFromNavigationDropdown3rd={getPageNameFromNavigationDropdown3rd}/>
                        <div className='section-1'>
                            <Section1 getPageNameFromSection1={getPageNameFromSection1} />
                        </div>
                        <div className='section-2'>
                            <Section2 header="I work with the best companies" />
                        </div>
                        <div className='section-3'>
                            <Section3 />
                        </div>
                        <div className='section-4'>
                            <Section4 getPageNameFromSection4Btn1={getPageNameFromSection4Btn1}/>
                        </div>
                        <div className='section-5'>
                            <Section5 getPageNameFromSection5Btn={getPageNameFromSection5Btn}/>
                        </div>

                        <div>
                            <h1 className='section6-heading'>What people say about me</h1>
                            <div className='section-6'>
                                {commentData.map((elements) => {
                                    return (
                                        <div key={elements.id}>
                                            <Section6 key={elements.id} name={elements.name} icon={elements.icon} image={elements.image} comments={elements.comments} position={elements.position} link={elements.link}/>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className='section-7'>
                            <Section7 getPageNameFromSection7Btn={getPageNameFromSection7Btn}/>
                        </div>
                        <div className='section-8'>
                            <Section8 getPageNameFromOutsourceGoogleAds={getPageNameFromOutsourceGoogleAds} getPageNameFromGoogleAdsAudit={getPageNameFromGoogleAdsAudit} getPageNameFromGoogleAdsCoaching={getPageNameFromGoogleAdsCoaching} getPageNameFromAboutMe={getPageNameFromAboutMe} getPageNameFromContact={getPageNameFromContact}/>
                        </div>
                    </div>
                )
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [page])

    return (
        <>
            {renderPage()}
        </>
    )
}
