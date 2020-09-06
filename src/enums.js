export const Format = {
    UNKNOWN: 0,
    ZIP: 1,
    TAR_GZIP: 2,
    TAR_BZIP: 3,
};

export const Action = {
    LIST: 0,
    EXTRACT: 1,
};

export const FileType = {
    DIRECTORY: 0,
    FILE: 1,
}

export const Signatures = {
    LOCAL_FILE_HEADER: 0x04034b50,
    ARCHIVE_EXTRA_DATA: 0x08064b50,
    CENTRAL_FILE_HEADER: 0x02014b50,
    HEADER: 0x05054b50,
    Z64_END_OF_CENTRAL_DIRECTORY_RECORD: 0x06064b50,
    Z64_END_OF_CENTRAL_DIRECTORY_LOCATOR: 0x07064b50,
    END_OF_CENTRAL_DIRECTORY_RECORD: 0x06054b50,
    BAD_SIGNATURE: 0,
}