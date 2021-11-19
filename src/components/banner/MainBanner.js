import { Button } from '@mui/material';
import { fontSize } from '@mui/system';
import React from 'react'
import { Trans, useTranslation } from 'react-i18next';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Img1 from '../../assets/image/hamber1.svg'
import Img2 from '../../assets/image/hamber2.svg'
import Img3 from '../../assets/image/hamber3.svg'

function MainBanner({ setIsPersian, isPersian }) {

    const { t, i18n } = useTranslation()

    const changeLanguage = (language) => {
        i18n.changeLanguage(language)
    }

    const handleChange = (e) => {
        if (e.target.checked == true) {
            changeLanguage("fa")
            setIsPersian(true)
        } else if (e.target.checked == false) {
            changeLanguage("en")
            setIsPersian(false)
        }
    }

    return (
        <div className="mt-14" style={{ direction: isPersian ? "rtl" : "ltr" }}>
            <main className="text-center">
                <h1 className="text-4xl sm:text-5xl">{t("description")}</h1>
                <p className="my-12  text-lg sm:text-xl">{t("description2")}</p>
                <Button style={{ marginTop: '10px', width: '240px', fontSize: isPersian && "22px" }} variant="contained" color="error">{t("textButton")}<NavigateNextIcon className="ml-2 text-2xl" /></Button>

                <div className="flex justify-end" style={{ marginRight: '-160px' }}>
                    <img src={Img3} className="w-72 transform  -rotate-12" />
                </div>

                <div className=" justify-evenly mt-2  flex-wrap hidden sm:flex">
                    <img src={Img1} className="w-48" />
                    <img src={Img2} className="w-80 bg" />
                </div>
            </main>
        </div>
    )
}

export default MainBanner
