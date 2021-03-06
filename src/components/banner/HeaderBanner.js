import React, { useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LanguageIcon from '@mui/icons-material/Language';
import Badge from '@mui/material/Badge';
import { Trans, useTranslation } from 'react-i18next';
import { Button, Fab, Switch } from '@mui/material';
import ImageSrc from '../../assets/image/logo.svg'

function HeaderBanner({ setIsPersian, isPersian }) {


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
        <header style={{ direction: isPersian ? "rtl" : "ltr" }}>

            <div className="flex justify-between m-2">
                <p className="text-2xl">15103 <strong>{t("contact")}</strong></p>
                <div className="flex">
                    <div className="mr-2">
                        <Fab color="secondary" size="small">EN</Fab>
                        <Switch onChange={handleChange} />
                        <Fab color="primary" size="small">FA</Fab>
                    </div>
                </div>
            </div>

            <nav className="flex justify-between">
                <div className="flex p-2">
                    <p className="m-2 text-2xl">{t("header.login")}</p>
                    <p className="text-2xl m-2">{t("header.servics")}</p>
                </div>
                <img src={ImageSrc} className="w-24 h-24 object-cover bg-gray-600 rounded-xl hidden sm:block" />
                <div className="flex p-2">
                    <p className="m-2 text-2xl">{t("header.products")}</p>
                    <p className="text-2xl m-2">{t("header.home")}</p>
                </div>
            </nav>

        </header>
    )
}

export default HeaderBanner
