export interface TrackInterface {
    name: string,
    album: {
        images: [
            {
                url: string
            }
        ]
        
    },
    artists: [
        {
            name: string
        }
    ]
}