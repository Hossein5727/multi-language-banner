import { Button } from '@mui/material';
import { fontSize } from '@mui/system';
import React from 'react'
import { Trans, useTranslation } from 'react-i18next';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

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
        <div className="mt-20" style={{ direction: isPersian ? "rtl" : "ltr" }}>
            <main className="text-center">
                <h1 className="text-2xl sm:text-4xl">{t("description")}</h1>
                <Button style={{ marginTop: '42px', width: '200px', fontSize: isPersian && "22px" }} variant="contained" color="error">{t("textButton")}<NavigateNextIcon className="ml-2 text-2xl" /></Button>
            </main>
        </div>
    )
}

export default MainBanner
