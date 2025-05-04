import { useState } from "react";
import React from 'react';
import { Formik, Form, Field, ErrorMessage as FormikErrorMessages  } from 'formik';
import * as Yup from 'yup';
import { Link } from "react-router-dom";

import useMarvelService from "../../services/MarvelService";

import './charSearchForm.scss';


export default function CharSearchForm() {
    const [char, setChar] = useState(null);
    const { loading, error, clearError, getCharacterByName } = useMarvelService();

    const onCharLoaded = (char) => setChar(char);
    const updateChar = (name ) => {
        clearError();
        getCharacterByName(name).then(onCharLoaded);
    };
    const ErrorMessage = error ? <div className="char_search-critical-error"></div> : null;
    const results = !char ? null : char.length > 0 ?
    <div className="char_search-wrapper">
        <div className="char_search-success">There is! Visit {char[0].name} page?</div>
        <Link to={`/characters/${char[0].id}`} className="button button_secondary">
            <div className="inner">To page</div>
        </Link>
    </div>
    : <div className="char_search-error">The character was not found. Check the name and try again</div>;

    return (
    <div className="char_search-form">
            <Formik
                initialValues={{ charName: '' }}
                validationSchema={
                    Yup.object({
                        charName: Yup.string()
                            .required('This Field is required')
                            .min(2, 'Must be at least 2 characters')
                            .max(200, 'Must be 200 characters or less')
                    })
                }
                onSubmit={({ charName}) => updateChar(charName)}  
            >  
            <Form>
                <label className="char_search-label" htmlFor="charName">Or find character by name:</label>
                <div className="char_search-wrapper">
                    <Field
                        id="charName"
                        name="charName"
                        type="text"
                        placeholder="Enter name"
                    />
                    <button
                        type="submit"
                        className="button button_main"
                        disabled={loading}
                    >
                        <div className="inner">Find</div>
                    </button>
                    <FormikErrorMessages name="charName" component="p" className="error" />
                </div>
            </Form>
        </Formik>
        {results}
        {ErrorMessage}
    </div>
    )
}