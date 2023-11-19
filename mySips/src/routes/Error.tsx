import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error: any = useRouteError();

    return (
        <div id="error-center">
            <div>
                <div
                    id="error-page"
                    className="box drink-box"
                    style={{ color: "black", padding: "15px" }}
                >
                    <h1>Oops!</h1>
                    <p>Sorry, an unexpected error has occurred.</p>
                    <p>
                        <i>{error.statusText || error.message}...</i>
                    </p>
                </div>
            </div>
        </div>
    );
}
