function Acordeon() {
    return (
        <>
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
                rel="stylesheet"
            />
            <style
                dangerouslySetInnerHTML={{
                    __html: "\n\t/* Custom style */\n    .accordion-button::after {\n      background-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='%23333' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z' clip-rule='evenodd'/%3e%3c/svg%3e\");\n      transform: scale(.7) !important;\n    }\n    .accordion-button:not(.collapsed)::after {\n      background-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='%23333' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z' clip-rule='evenodd'/%3e%3c/svg%3e\");\n    }\n",
                }}
            />
            <div className="m-4">
                <div className="accordion" id="myAccordion">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button
                                type="button"
                                className="accordion-button collapsed"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                            >
                                1. What is HTML?
                            </button>
                        </h2>
                        <div
                            id="collapseOne"
                            className="accordion-collapse collapse"
                            data-bs-parent="#myAccordion"
                        >
                            <div className="card-body">
                                <p>
                                    HTML stands for HyperText Markup Language.
                                    HTML is the standard markup language for
                                    describing the structure of web pages.{' '}
                                    <a
                                        href="https://www.tutorialrepublic.com/html-tutorial/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Learn more.
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button
                                type="button"
                                className="accordion-button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                            >
                                2. What is Bootstrap?
                            </button>
                        </h2>
                        <div
                            id="collapseTwo"
                            className="accordion-collapse collapse show"
                            data-bs-parent="#myAccordion"
                        >
                            <div className="card-body">
                                <p>
                                    Bootstrap is a sleek, intuitive, and
                                    powerful front-end framework for faster and
                                    easier web development. It is a collection
                                    of CSS and HTML conventions.{' '}
                                    <a
                                        href="https://www.tutorialrepublic.com/twitter-bootstrap-tutorial/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Learn more.
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button
                                type="button"
                                className="accordion-button collapsed"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                            >
                                3. What is CSS?
                            </button>
                        </h2>
                        <div
                            id="collapseThree"
                            className="accordion-collapse collapse"
                            data-bs-parent="#myAccordion"
                        >
                            <div className="card-body">
                                <p>
                                    CSS stands for Cascading Style Sheet. CSS
                                    allows you to specify various style
                                    properties for a given HTML element such as
                                    colors, backgrounds, fonts etc.{' '}
                                    <a
                                        href="https://www.tutorialrepublic.com/css-tutorial/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Learn more.
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Acordeon;
